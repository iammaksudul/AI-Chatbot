# AI Chatbot for Fiverr Freelancer

## Description
This project aims to build a personal AI chatbot to assist in responding to customer inquiries on Fiverr. The chatbot generates professional and tailored responses based on the customer’s queries, focusing on different professional fields like server administration, web hosting, cybersecurity, cloud infrastructure, and Python development.

## Setup

### Prerequisites
- Python 3.x
- Virtual environment (venv)
- Required libraries (see `requirements.txt`)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ai_chatbot.git
   cd ai_chatbot
   ```

2. **Set up the virtual environment:**
   ```bash
   python3 -m venv ai_chatbot_env
   source ai_chatbot_env/bin/activate
   ```

3. **Install the required libraries:**
   ```bash
   pip install -r requirements.txt
   ```

## Training the Model
1. **Prepare the dataset:**
   - Add your professional data to `data/professional_data.txt`.

2. **Train the model:**
   ```bash
   python model/train_model.py
   ```

## Running the Chatbot
1. **Start the Flask app:**
   ```bash
   python app.py
   ```

2. **Interact with the chatbot:**
   - Open your web browser and go to `http://localhost:5000`.
   - Type your message in the input box and press Enter to chat with the bot.

## License
This project is licensed under the MIT License.