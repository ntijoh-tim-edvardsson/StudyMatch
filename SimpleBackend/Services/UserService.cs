using SimpleBackend.ModelsAndDtos;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using SimpleBackend.Config;

namespace SimpleBackend.Services;

public class UserService
{
    private readonly IMongoCollection<User> _users;

    public UserService(IOptions<MongoSettings> settings)
    {
        var client = new MongoClient(settings.Value.ConnectionString);
        var database = client.GetDatabase(settings.Value.DatabaseName);
        _users = database.GetCollection<User>("Users");
    }
    public async Task<List<User>> GetAllAsync()
    {
        return await _users.Find(_ => true).ToListAsync();
    }
    public async Task<User?> GetByIdAsync(string id)
    {
        return await _users.Find(u => u.Id == id).FirstOrDefaultAsync();
    }
    public async Task<User> CreateAsync(User user)
    {
        await _users.InsertOneAsync(user);
        return user;
    }
}
