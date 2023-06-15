import json
import random


# Get recent messages
def get_recent_messages():

    # Define the file name and learn instruction(GPT'S role)
    file_name = "stored_data.json"
    learn_instruction = {
        "role": "system",
        "content": "You are a helpful assitant. Your name is NKB. Keep your answers to under 30 words."
    }

    # Initialize messages
    messages = []

    # Add a random element
    random_number = random.uniform(0, 1)
    if random_number < 0.5:
        learn_instruction["content"] = learn_instruction["content"] + \
            " Your response will include some dry humour."
    else:
        learn_instruction["content"] = learn_instruction["content"] + \
            " Your response will include some little level of seriousness."

    # Append instruction to messages
    messages.append(learn_instruction)

    # Get last messages
    try:
        with open(file_name) as user_file:
            data = json.load(user_file)

            # Append last 5 items of data
            if data:
                if len(data) < 5:
                    for item in data:
                        messages.append(item)
                else:
                    for item in data[-5:]:
                        messages.append(item)
    except Exception as e:
        print(e)
        pass

    return messages


# Store Messages
def store_messages(request_message, response_message):

    # Define the file name
    file_name = "stored_data.json"

    # Get recent messages
    messages = get_recent_messages()[1:]
    user_message = {"role": "user", "content": request_message}
    assistant_message = {"role": "assistant", "content": response_message}

    messages.append(user_message)
    messages.append(assistant_message)

    # Save the updated file
    with open(file_name, "w") as user_file:
        json.dump(messages, user_file)


# Reset messages
def reset_messages():

    # Overwrite current file with nothing
    open("stored_data.json", "w")
