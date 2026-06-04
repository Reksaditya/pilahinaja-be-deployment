import swaggerUi from "swagger-ui-express";

export const swaggerSpec = {
  openapi: "3.0.0",

  info: {
    title: "PilahinAja API",
    version: "1.0.0",
    description: "Backend API Documentation",
  },

  servers: [
    {
      url: "http://localhost:3000",
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },

  security: [
    {
      bearerAuth: [],
    },
  ],

  tags: [
    { name: "Auth" },
    { name: "User" },
    { name: "Title" },
    { name: "Category" },
    { name: "Trash" },
    { name: "Guide" },
    { name: "History" },
    { name: "Achievement" },
    { name: "Post" },
    { name: "Dashboard" },
    { name: "Leaderboard" },
    { name: "AI" },
  ],

  paths: {
    // =====================
    // AUTH
    // =====================
    "/auth/register": {
      post: {
        tags: ["Auth"],
        summary: "Register user",

        parameters: [
          {
            name: "username",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "email",
            required: true,
          },
          {
            name: "password",
            required: true,
          },
        ],
      },
    },

    "/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Login user",
      },
    },

    // =====================
    // USER
    // =====================
    "/user": {
      get: {
        tags: ["User"],
        summary: "Get all users",
      },
    },

    "/user/{id}": {
      get: {
        tags: ["User"],
        summary: "Get user by id",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
      },

      patch: {
        tags: ["User"],
        summary: "Update user",
      },

      delete: {
        tags: ["User"],
        summary: "Delete user",
      },
    },

    "/user/profile/{id}": {
      get: {
        tags: ["User"],
        summary: "Get user profile",
      },
    },

    "/user/password/{id}": {
      patch: {
        tags: ["User"],
        summary: "Update password",
      },
    },

    "/user/xp/{id}": {
      get: {
        tags: ["User"],
        summary: "Get total XP",
      },
    },

    "/user/point/{id}": {
      get: {
        tags: ["User"],
        summary: "Get total points",
      },
    },

    // =====================
    // TITLE
    // =====================
    "/title": {
      get: {
        tags: ["Title"],
        summary: "Get all titles",
      },

      post: {
        tags: ["Title"],
        summary: "Create title",
      },
    },

    "/title/{id}": {
      get: {
        tags: ["Title"],
        summary: "Get title detail",
      },

      patch: {
        tags: ["Title"],
        summary: "Update title",
      },

      delete: {
        tags: ["Title"],
        summary: "Delete title",
      },
    },

    "/title/updateTitle/{id}": {
      patch: {
        tags: ["Title"],
        summary: "Update user title",
      },
    },

    // =====================
    // CATEGORY
    // =====================
    "/category": {
      get: {
        tags: ["Category"],
        summary: "Get all categories",
      },

      post: {
        tags: ["Category"],
        summary: "Create category",
      },
    },

    "/category/{id}": {
      get: {
        tags: ["Category"],
        summary: "Get category detail",
      },

      patch: {
        tags: ["Category"],
        summary: "Update category",
      },

      delete: {
        tags: ["Category"],
        summary: "Delete category",
      },
    },

    // =====================
    // TRASH
    // =====================
    "/trash": {
      get: {
        tags: ["Trash"],
        summary: "Get all trash",
      },

      post: {
        tags: ["Trash"],
        summary: "Create trash",
      },
    },

    "/trash/{id}": {
      get: {
        tags: ["Trash"],
        summary: "Get trash detail",
      },

      patch: {
        tags: ["Trash"],
        summary: "Update trash",
      },

      delete: {
        tags: ["Trash"],
        summary: "Delete trash",
      },
    },

    // =====================
    // GUIDE
    // =====================
    "/guide": {
      get: {
        tags: ["Guide"],
        summary: "Get all recycling guides",
      },

      post: {
        tags: ["Guide"],
        summary: "Create recycling guide",
      },
    },

    "/guide/{id}": {
      get: {
        tags: ["Guide"],
        summary: "Get guide detail",
      },

      patch: {
        tags: ["Guide"],
        summary: "Update guide",
      },

      delete: {
        tags: ["Guide"],
        summary: "Delete guide",
      },
    },

    // =====================
    // HISTORY
    // =====================
    "/history": {
      post: {
        tags: ["History"],
        summary: "Create waste submission history",
      },
    },

    // =====================
    // ACHIEVEMENT
    // =====================
    "/achievement": {
      get: {
        tags: ["Achievement"],
        summary: "Get all achievements",
      },

      post: {
        tags: ["Achievement"],
        summary: "Create achievement",
      },
    },

    "/achievement/{id}": {
      get: {
        tags: ["Achievement"],
        summary: "Get achievement detail",
      },
    },

    // =====================
    // POST
    // =====================
    "/post": {
      get: {
        tags: ["Post"],
        summary: "Get all community posts",
      },

      post: {
        tags: ["Post"],
        summary: "Create post",
      },
    },

    "/post/{id}": {
      get: {
        tags: ["Post"],
        summary: "Get post detail",
      },

      patch: {
        tags: ["Post"],
        summary: "Update post",
      },

      delete: {
        tags: ["Post"],
        summary: "Delete post",
      },
    },

    // =====================
    // DASHBOARD
    // =====================
    "/dashboard/{id}": {
      get: {
        tags: ["Dashboard"],
        summary: "Dashboard statistics",
      },
    },

    // =====================
    // LEADERBOARD
    // =====================
    "/leaderboard": {
      get: {
        tags: ["Leaderboard"],
        summary: "Leaderboard ranking",
      },
    },

    // =====================
    // GEMINI AI
    // =====================
    "/ai/detect": {
      post: {
        tags: ["AI"],

        summary: "Detect waste from image",

        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  image: {
                    type: "string",
                    format: "binary",
                  },
                },
              },
            },
          },
        },

        responses: {
          200: {
            description: "Waste detection result",
          },
        },
      },
    },
  },
};

export { swaggerUi };
