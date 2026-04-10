# Postman Sample Requests

By default, the backend server will run on `http://localhost:5000`. You can use these sample requests to test your APIs in Postman.

## 1. Fetch All Places (GET)

**Method:** `GET`
**URL:** `http://localhost:5000/api/places`

**Description:** Retrieves a list of all tourist places stored in the database.

---

## 2. Add a New Place (POST)

**Method:** `POST`
**URL:** `http://localhost:5000/api/places`
**Headers:** 
- `Content-Type`: `application/json`

**Body (Raw JSON):**

```json
{
  "name": "Santorini",
  "location": "Greece",
  "description": "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
  "image": "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80"
}
```

### Try these other examples to add to your database:

**Example 2: Kyoto, Japan**
```json
{
  "name": "Kyoto",
  "location": "Japan",
  "description": "Famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
  "image": "https://images.unsplash.com/photo-1493976040375-301f4d2f7881?auto=format&fit=crop&w=800&q=80"
}
```

**Example 3: Banff National Park**
```json
{
  "name": "Banff National Park",
  "location": "Alberta, Canada",
  "description": "Canada's oldest national park, encompassing 6,641 square kilometres of mountainous terrain, with many glaciers and ice fields, dense coniferous forest, and alpine landscapes.",
  "image": "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=800&q=80"
}
```
