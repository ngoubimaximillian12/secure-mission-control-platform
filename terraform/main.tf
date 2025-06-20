provider "render" {
  token = var.render_api_key
}

resource "render_service" "backend" {
  name             = "secure-mission-backend"
  type             = "web_service"
  repo             = "https://github.com/YOUR_USERNAME/secure-mission-control-platform"
  branch           = "main"
  build_command    = "cd backend && npm install"
  start_command    = "node backend/index.js"
  env              = "node"
  plan             = "free"

  env_vars = {
    DATABASE_URL = var.database_url
    JWT_SECRET   = var.jwt_secret
  }
}

resource "render_postgresql" "database" {
  name     = "secure-mission-db"
  user     = "postgres"
  database = "devdb"
}

variable "render_api_key" {}
variable "database_url" {}
variable "jwt_secret" {}
