# task-manager
Create an MVP Dockerised task manager application with an API and a frontend interface.

# clone the app
 ## git@github.com:shyluthomas/task-manager.git


# Backend setup

##  goto Backend directory

 - Goto terminal and run below code for install dependancies
 - npm install

 ## Running the Backend
  - Setup the sqlite by running 'npm run migrate'
  - npm run start
  - it will open the port : 8001
  - API will available at : http://localhost:8001
  - API helath at : http://localhost:8001/health


  # Frontend Setup

  ## Goto Frontend Directory
  - In terminal run below code for install dependancies
   - npm install

 ## Running the Frontend

 - Dev mode
    - run 'npm run dev'
    - it will open port 5555
    - UI will available at : http://localhost:5555

 # running the whole app in Docker : no need of do anything showed above
  ## run below docker command in root directory
   - docker-compose up
   - The Application will start in below port
   - http://localhost:3050
   - API :  http://localhost:3050/api
   - UI :  http://localhost:3050/client

