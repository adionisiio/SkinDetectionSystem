# backend.py

from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

app = Flask(__name__)

# Load the pre-trained model
model = load_model('RESNET50.h5')

# Define constants
IMG_SIZE = (224, 224)

@app.route('/detect_skin_disease', methods=['POST'])
def detect_skin_disease():
    # Get the image file from the request
    file = request.files['image']

    # Load and preprocess the image
    img = image.load_img(file, target_size=IMG_SIZE)
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img / 255.0  # Normalize

    # Predict
    prediction = model.predict(img)
    result = "Normal" if prediction < 0.5 else "Abnormal"

    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
