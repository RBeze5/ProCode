using UnityEngine;

public class MyUnityProgram : MonoBehaviour
{
    private Rigidbody2D rb;
    private float speed = 5f;

    private void Start()
    {
        // Create a new GameObject
        GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        
        // Add a Rigidbody2D component to the cube
        rb = cube.AddComponent<Rigidbody2D>();
        rb.gravityScale = 0f;

        // Set the cube's position and scale
        cube.transform.position = new Vector3(0f, 0f, 0f);
        cube.transform.localScale = new Vector3(2f, 2f, 2f);
    }

    private void Update()
    {
        // Move the cube
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");
        Vector2 movement = new Vector2(moveHorizontal, moveVertical);
        rb.velocity = movement * speed;
    }
}