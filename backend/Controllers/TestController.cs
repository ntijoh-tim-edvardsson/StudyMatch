using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

[ApiController]
[Route("api/test")]
public class TestController : ControllerBase
{
    private readonly MongoService _mongo;

    public TestController(MongoService mongo)
    {
        _mongo = mongo;
    }

    [HttpPost]
    public IActionResult TestMongo()
    {
        var collection = _mongo.Database.GetCollection<BsonDocument>("Test");

        collection.InsertOne(new BsonDocument
        {
            { "message", "MongoDB works" },
            { "createdAt", DateTime.UtcNow }
        });

        return Ok("Saved to MongoDB");
    }
}