A project to integrate react-scripts with spring boot

Based on https://github.com/facebookincubator/create-react-app and
https://spring.io/guides/tutorials/react-and-spring-data-rest/

# Development

## Backend

Start the spring boot app as usual. It will run the Spring server at port 8080

## Frontend

Start the react-scripts script with the development server:

    cd frontend
    npm start

It will start a development server at port 8081, with a proxy for `/api`
    calls to port 8080


# Deployment

    mvn install

Will build the frontend, and will copy the react artifacts into the server's
`target/classes/static` folder.