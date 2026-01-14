using MongoDB.Driver;

public class MongoService
{
    public IMongoDatabase Database { get; }

    public MongoService(IConfiguration configuration)
    {
        var connectionString = configuration["MongoDb:ConnectionString"];
        var databaseName = configuration["MongoDb:DatabaseName"];

        if (string.IsNullOrEmpty(connectionString))
            throw new Exception("MongoDB connection string is missing.");

        if (string.IsNullOrEmpty(databaseName))
            throw new Exception("MongoDB database name is missing.");

        var client = new MongoClient(connectionString);
        Database = client.GetDatabase(databaseName);
    }
}
