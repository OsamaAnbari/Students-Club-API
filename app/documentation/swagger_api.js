const express = require('express')
const router = express.Router()

const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  "openapi": "3.0.3",
  "info": {
    "title": "My System - API",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "osama.3nbri13@gmail.com"
    },
    "license": {
      "name": "Apache 2.00",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.11"
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  },
  "servers": [
    {
      "url": "http://localhost:3000/"
    }
  ],
  "tags": [
    {
      "name": "users",
      "description": "Everything about your Pets",
      "externalDocs": {
        "description": "Find out more",
        "url": "http://swagger.io"
      }
    }
  ],
  "paths": {
    "/users": {
      "get": {
        "tags": [
          "users"
        ],
        "summary": "get all users",
        "description": "get all users",
        "responses": {
          "200": {
            "description": "Successful",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "502": {
            "description": "Server error"
          }
        }
      },
      "post": {
        "tags": [
          "users"
        ],
        "summary": "add a new user",
        "description": "add a new user",
        "requestBody": {
          "description": "Create a new user",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/users/{id}": {
      "get": {
        "tags": [
          "users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "Numeric ID of the user to get"
          }
        ],
        "summary": "get user by id",
        "description": "get user by id",
        "responses": {
          "200": {
            "description": "Successful",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "502": {
            "description": "Server error"
          }
        }
      },
      "delete": {
        "tags": [
          "users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "Numeric ID of the user to get"
          }
        ],
        "summary": "delete user by id",
        "description": "delete user by id",
        "responses": {
          "200": {
            "description": "Successful"
          },
          "502": {
            "description": "Server error"
          }
        }
      },
      "put": {
        "tags": [
          "users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "Numeric ID of the user to put"
          }
        ],
        "summary": "modify user by id",
        "description": "modify user by id",
        "responses": {
          "200": {
            "description": "Successful"
          },
          "502": {
            "description": "Server error"
          }
        }
      }
    },
    "/activities": {
      "get": {
        "tags": [
          "activities"
        ],
        "summary": "get all activities",
        "description": "get all activities",
        "responses": {
          "200": {
            "description": "Successful"
          },
          "502": {
            "description": "Server error"
          }
        }
      },
      "post": {
        "tags": [
          "activities"
        ],
        "summary": "add a new activity",
        "description": "add a new activity",
        "requestBody": {
          "description": "Create a new activity",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Activity"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Activity"
                }
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/activities/{id}": {
      "delete": {
        "tags": [
          "activities"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "Numeric ID of the activity to get"
          }
        ],
        "summary": "delete activity by id",
        "description": "delete activity by id",
        "responses": {
          "200": {
            "description": "Successful"
          },
          "502": {
            "description": "Server error"
          }
        }
      },
      "put": {
        "tags": [
          "activities"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "Numeric ID of the activity to put"
          }
        ],
        "summary": "modify activity by id",
        "description": "modify activity by id",
        "responses": {
          "200": {
            "description": "Successful"
          },
          "502": {
            "description": "Server error"
          }
        }
      }
    },
    "/messages/": {
      "post": {
        "tags": [
          "messages"
        ],
        "summary": "add a new messages",
        "description": "add a new messages",
        "requestBody": {
          "description": "Create a new messages",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Activity"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Activity"
                }
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/messages/getsent": {
      "get": {
        "tags": [
          "messages"
        ],
        "summary": "get sent messages",
        "description": "get sent messages",
        "responses": {
          "200": {
            "description": "Successful"
          },
          "502": {
            "description": "Server error"
          }
        }
      }
    },
    "/messages/getreceived": {
      "get": {
        "tags": [
          "messages"
        ],
        "summary": "get received messages",
        "description": "get received messages",
        "responses": {
          "200": {
            "description": "Successful"
          },
          "502": {
            "description": "Server error"
          }
        }
      }
    },
    "/messages/{id}": {
      "get": {
        "tags": [
          "messages"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "Numeric ID of the activity to get"
          }
        ],
        "summary": "get activity by id",
        "description": "get activity by id",
        "responses": {
          "200": {
            "description": "Successful",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "502": {
            "description": "Server error"
          }
        }
      },
      "delete": {
        "tags": [
          "messages"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "Numeric ID of the messages to get"
          }
        ],
        "summary": "delete messages by id",
        "description": "delete messages by id",
        "responses": {
          "200": {
            "description": "Successful"
          },
          "502": {
            "description": "Server error"
          }
        }
      }
    },
    "/login/admin": {
      "post": {
        "tags": [
          "login"
        ],
        "summary": "login as an admin",
        "description": "login as an admin",
        "requestBody": {
          "description": "login as an admin",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Activity"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Activity"
                }
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/login/user": {
      "post": {
        "tags": [
          "login"
        ],
        "summary": "login as a user",
        "description": "login as a user",
        "requestBody": {
          "description": "login as a user",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Activity"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Activity"
                }
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/personal": {
      "get": {
        "tags": [
          "pesrsonal"
        ],
        "summary": "get my information",
        "description": "get my information",
        "responses": {
          "200": {
            "description": "Successful"
          },
          "502": {
            "description": "Server error"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          },
          "surname": {
            "type": "string"
          },
          "birth_date": {
            "type": "string"
          },
          "contact": {
            "$ref": "#/components/schemas/Contact"
          },
          "education": {
            "$ref": "#/components/schemas/Education"
          },
          "account": {
            "$ref": "#/components/schemas/Account"
          },
          "activities": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Account"
            }
          }
        }
      },
      "Contact": {
        "type": "object",
        "properties": {
          "mobile": {
            "type": "string"
          },
          "email": {
            "type": "string"
          }
        }
      },
      "Education": {
        "type": "object",
        "properties": {
          "university": {
            "type": "string"
          },
          "faculty": {
            "type": "string"
          },
          "department": {
            "type": "string"
          },
          "grade": {
            "type": "string"
          }
        }
      },
      "Account": {
        "type": "object",
        "properties": {
          "role": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "admin": {
            "type": "string"
          }
        }
      },
      "Activity": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "teacher": {
            "type": "string"
          },
          "date": {
            "type": "string"
          },
          "duration": {
            "type": "string"
          },
          "students": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/User"
            }
          }
        }
      },
      "Message": {
        "type": "object",
        "properties": {
          "sender_id": {
            "type": "string"
          },
          "receiver_id": {
            "type": "string"
          },
          "date": {
            "type": "string"
          },
          "subject": {
            "type": "string"
          }
        }
      }
    },
    "requestBodies": {
      "UserArray": {
        "description": "List of user object",
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/User"
              }
            }
          }
        }
      }
    }
  }
}

//var swaggerSpec = swaggerJsdoc(options)
//const specs = swaggerJsdoc('./doc.yaml');

router.use(
  swaggerUi.serve,
  swaggerUi.setup(options)
);

module.exports = router