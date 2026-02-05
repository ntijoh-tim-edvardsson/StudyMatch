using Microsoft.AspNetCore.Mvc;
using SimpleBackend.ModelsAndDtos;
using SimpleBackend.Services;

namespace SimpleBackend.Controllers;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var users = await _userService.GetAllAsync();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        var user = await _userService.GetByIdAsync(id);
        if (user == null) return NotFound();
        return Ok(user);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] RegisterUserDto dto)
    {
        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
            Password = dto.Password
        };

        var created =  await _userService.CreateAsync(user);
        return Ok(created);
    }
}
