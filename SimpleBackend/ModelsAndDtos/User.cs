using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public required string Name { get; set; }
    public required string Email { get; set; }
    public required string Password { get; set; }

    public int Age { get; set; }
    public string School { get; set; } = "";
    public string Program { get; set; } = "";
    public int Year { get; set; }
    public string Pfp { get; set; } = "";

    public string[] StudySubject { get; set; } = [];
    public string[] StudyStyle { get; set; } = [];
    public string[] SkillLevel { get; set; } = [];
    public string[] StudyGoals { get; set; } = [];
    public string[] Availability { get; set; } = [];
    public string[] StudyMode { get; set; } = [];

    public string Location { get; set; } = "";
    public string[] Languages { get; set; } = [];
    public string Bio { get; set; } = "";
}
