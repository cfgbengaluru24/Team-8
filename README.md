
# Trainers' Adda

## Overview

Trainers' Adda is an all-in-one solution designed to digitize the process of training trainers, recording baseline and endline data, and engaging in post-module activities. The platform also integrates a helpdesk for FAQs to assist with program management.

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Features](#features)
3. [Innovation](#innovation)
4. [System Architecture](#system-architecture)
5. [Installation](#installation)

## Problem Statement

- **Baseline and Endline Data:** Record baseline and endline data of program participants.
- **Training Modules:** Train trainers through digital modules and assess their learning.
- **Post Module Activities:** Engage in post-module activities.
- **Helpdesk:** Create a helpdesk for FAQs which can be utilized for program management.

## Features

- **Data Recording:** Digitized recording of baseline and endline data for each cycle.
- **Training Modules:** Modules for trainers to learn and train trainees.
- **Chatbot Integration:** Integrated a chatbot to automate the process of answering FAQs.
- **Bank Location Generation:** Generation of location of banks near the trainer.

## Innovation

- **Chatbot Integration:** Integration of a chatbot to answer FAQs on the platform.
- **Maps Integration:** Integrating maps showing SHG locations connected to NGOs, enhancing the website's visual appeal.
- **E-Certificates:** Generating e-certificates to motivate the trainer.
- **Automatic Data Visualization:** Automatic data visualization on the trainer’s dashboard.
- **EC2 Deployment:** The website can be deployed on EC2 instances that work on the 'Pay As You Go' model, saving operational costs.

## System Architecture

The architecture leverages the MERN stack (MongoDB, Express, React, Node.js) to ensure a scalable, efficient, and modular solution. The chatbot from Chatbase.ai is integrated to provide automated support for FAQs.
![flowchart(1)](https://github.com/user-attachments/assets/06bcc495-4b8b-4ab7-8547-fba03916397e)


## Installation



1. **Clone the repository:**

    git clone https://github.com/yourusername/trainers-adda.git<br>
    cd trainers-adda
    \`\`\`

2. **Install dependencies for frontend:** <br>
    cd bpf <br>
    npm install
    \`\`\`

3. **Set up environment variables:**<br>


    Create a \`.env\` file and add your environment variables.

4. **Run the development server:**<br>
    cd server <br>
    npm start
    \`\`\`
