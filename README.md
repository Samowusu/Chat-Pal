# Chat-Pal

Chat-Pal is an innovative chat application built with React and Python that provides users with a unique and engaging way to interact with an AI assistant. Unlike traditional chatbots, Chat-Pal allows users to communicate with the AI assistant using voice notes, creating a more conversational and natural experience.

## Table of Content:

- [Features](#features)
- [Resources](#resources)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Voice Communication: Users can send voice notes to the AI assistant, enabling a hands-free and convenient way to interact.
- Voice Response: The AI assistant responds to user queries and messages with voice notes, enhancing the conversational aspect of the interaction.
- Chat Reset: Users can reset chat with AI assistant to begin a new conversation.
- React and Python Integration: The application is developed using React for the frontend and Python for the backend, leveraging the strengths of both technologies to deliver a seamless user experience.
- Integration with ElevenLabs API: Chat-Pal utilizes the ElevenLabs API for Text-to-Speech (TTS) functionality, converting text responses into voice notes for a more immersive communication experience.

## Resources:

Designs [Figma](https://www.figma.com/file/XZYrexNm4dqnTqWtyRiRAc/NK-Bot?type=design&node-id=0-1&mode=design&t=LLxCZSeqzSMvUIP2-0)

## Technologies

`React`, `Python`, `Fast API` , `WavesurferJS`, `Tailwind`, `OpenAI`, `Eleven Labs API`, `Vite`, `TypeScript`

## Prerequisites

- Node.js and npm installed on your machine
- Python 3.7 or higher and pip package manager
- Open AI API Key
- Open AI organisation string
- Eleven Labs API key

## Getting Started

#### Clone the repository:

```
    git clone https://github.com/Samowusu/Chat-Pal.git
```

### Backend

1. Navigate to the project directory:

```
    cd server

```

2. Create a virtual environment:

```
    python3 -m venv venv

```

3. Activate the virtual environment:

   - On Linux or maxOS:

   ```
       source venv/bin/activate
   ```

   - On Windows:

   ```
       venv\Scripts\activate
   ```

4. Install dependencies:

```
    pip install -r requirements.txt

```

5. Configure the environment variables:

- Create a `.env` file in the root directory of the project.
- Define the necessary environment variables, such as the OpenAI and Eleven Labs API keys.

  For example:

  ```
   OPEN_AI_KEY=<your OpenAI API key>
   OPEN_AI_ORG=<your OpenAI organisation string>
   ELEVEN_LABS_API_KEY=<your Eleven Labs API key>
  ```

  Replace `<your OpenAI API key>`, `<your OpenAI organisation string>` and `<your Eleven Labs API key>` with your actual OpenAI API key, OpenAI organisation string and Eleven Labs API key respectively.

6. Start the development server:

```
    uvicorn main:app
```

#### Frontend

1. Install dependencies:

```
    cd client
    npm install
```

2. Start the development server:

```
    npm run dev
```

## Folder Structure

- [**client**](client)
  - [**public**](client/public)
  - [**src**](client/src)
    - [**assets**](client/src/assets)
      - [**svgs**](client/src/assets/svgs)
    - [**components**](client/src/components)
    - [**config**](client/src/config)
- [**server**](server)
  - [**functions**](server/functions)
  - [**uploads**](server/uploads)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request.

## License

This project is licensed under the [MIT License.](https://opensource.org/license/mit/)
