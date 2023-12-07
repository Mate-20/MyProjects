package com.example.miniassignment;

import static org.mockito.Mockito.when;
import java.util.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import com.example.miniassignment.Controller.HomeController;
import com.example.miniassignment.Entity.PageInfo;
import com.example.miniassignment.Entity.User;
import com.example.miniassignment.Entity.UserWrapper;
import com.example.miniassignment.Service.UserService;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;
import org.springframework.http.MediaType;

@WebMvcTest(HomeController.class)
// @SpringBootTest
class JavaMiniAssignment2ApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private UserService userService;

	@Test
	public void testAddUsersEndpoint() throws Exception {
		// Performing POST request with size as 3 in the request body
		String requestBody = "{\"size\": 3}";
		mockMvc.perform(MockMvcRequestBuilders.post("/users")
				.contentType(MediaType.APPLICATION_JSON)
				.content(requestBody))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(3))); // Assuming the service returns 3 users for size 3
	}

	@Test
	public void testAddUsersEndpointWithInvalidSize() throws Exception {
		// Performing POST request with negative size
		String negativeSizeRequest = "{\"size\": -1}";

		mockMvc.perform(MockMvcRequestBuilders.post("/users")
				.contentType(MediaType.APPLICATION_JSON)
				.content(negativeSizeRequest))
				.andExpect(status().isNotAcceptable()); // Assuming NOT_FOUND for invalid input

		// Performing POST request with size greater than 5
		String greaterThanFiveRequest = "{\"size\": 6}";

		mockMvc.perform(MockMvcRequestBuilders.post("/users")
				.contentType(MediaType.APPLICATION_JSON)
				.content(greaterThanFiveRequest))
				.andExpect(status().isNotAcceptable()); // Assuming NOT_FOUND for invalid input
	}

	@Test
	public void testGetUsersEndpoint() throws Exception {
		// Mocking userService.getUsers() to return a sample list of users
		User user1 = new User(1, "Akash", 23, "male", "20/09/2000", "IN", "VERIFIED", "3/12/2023", "3/12/2023");
		User user2 = new User(2, "Alvin", 23, "male", "20/09/2000", "IN", "VERIFIED", "3/12/2023", "3/12/2023");
		PageInfo info1 = new PageInfo(true, false, 2);
		PageInfo info2 = new PageInfo(false, true, 2);

		List<UserWrapper> sampleUsersByAge = Arrays.asList(new UserWrapper(user1, info1),
				new UserWrapper(user2, info2));
		when(userService.getUsers("age", "odd", 2, 0)).thenReturn(sampleUsersByAge);

		// Perform GET request for correct URL 1
		mockMvc.perform(get("/users/age/odd/2/0"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(2)))
				.andExpect(jsonPath("$[0].userData.user_id").value(1));

		List<UserWrapper> sampleUsersByName = Arrays.asList(new UserWrapper(user1,
				info1),
				new UserWrapper(user2, info2));
		when(userService.getUsers("name", "odd", 2,
				0)).thenReturn(sampleUsersByName);

		// Perform GET request for correct URL 2
		mockMvc.perform(get("/users/name/odd/2/0"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(2)))
				.andExpect(jsonPath("$[0].userData.user_id").value(1));

	}

	// Testing for Wrong Url entered
	@Test
	public void testInvalidUrlEndpoint() throws Exception {
		mockMvc.perform(get("/users/akash/odd/2/0"))
				.andExpect(status().is(equalTo(HttpStatus.OK.value())));
	}

	// Testing for Wrong Url entered
	@Test
	public void testInvalidUrlEndpoint2() throws Exception {
		mockMvc.perform(get("/users/name/odd/2/name"))
				.andExpect(status().isBadRequest());
	}

}
