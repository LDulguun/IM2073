package com.webproject.maven.backend.item;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = { "*" })
@RequestMapping("/api")
public class ItemResource {

  @Autowired
  private ItemManagementService itemManagementService;
  @Autowired
  private UserService userService;

  @CrossOrigin(origins = { "*" })
  @GetMapping("/search")
  public List<Item> getAllItems() {
    return itemManagementService.search("");
  }
  /*
  @CrossOrigin(origins = { "*" })
  @GetMapping("{sessionId}/search")
  public List<Item> getAllItemsUser() {
    return itemManagementService.search("");
  }
*/
  @CrossOrigin(origins = { "*" })
  @GetMapping("/search/{keyword}")
  public List<Item> getSearchResult(@PathVariable String keyword) {
    return itemManagementService.search(keyword);
  }
/*
  @CrossOrigin(origins = { "*" })
  @GetMapping("{sessionId}/search/{keyword}")
  public List<Item> getSearchResultUser(@PathVariable String keyword) {
    return itemManagementService.search(keyword);
  }
*/
  @CrossOrigin(origins = { "*" })
  @GetMapping("/login/{username}/{password}")
  public String login(@PathVariable String username, @PathVariable String password) {
    return userService.login(username, password);
  }

  @CrossOrigin(origins = { "*" })
  @GetMapping("{sessionId}/logout")
  public String logout(@PathVariable String sessionId) {
    return userService.logout(sessionId);
  }

  @CrossOrigin(origins = { "*" })
  @PostMapping("/signup/{pword}")
  public ResponseEntity<Void> signup(@RequestBody User input, @PathVariable String pword) {
    if (userService.signUp(input, pword)) {
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand("signedUp")
          .toUri();
        return ResponseEntity.created(uri).build();
      }
    return ResponseEntity.noContent().build();
  }

  @CrossOrigin(origins = { "*" })
  @GetMapping("/{sessionId}/userdetails")
  public User getUserDetails(@PathVariable String sessionId) {
    if (userService.checkToken(sessionId)) {
      userService.updateToken(sessionId);
      return userService.getUserDetails(sessionId);
    }
    userService.logout(sessionId);
    return null;
  }

  @CrossOrigin(origins = { "*" })
  @GetMapping("/{sessionId}/cart")
  public List<Item> getCart(@PathVariable String sessionId) {
    if (userService.checkToken(sessionId)) {
      userService.updateToken(sessionId);
      return userService.showCart(sessionId);
    }
    userService.logout(sessionId);
    return null;
  }

  @CrossOrigin(origins = { "*" })
  @GetMapping("/{sessionId}/orders")
  public List<Item> getOrders(@PathVariable String sessionId) {
    if (userService.checkToken(sessionId)) {
      userService.updateToken(sessionId);
      return userService.showOrders(sessionId);
    }
    userService.logout(sessionId);
    return null;
  }

  @CrossOrigin(origins = { "*" })
  @PostMapping("/{sessionId}/cart/add/{itemId}/{qty}")
  public ResponseEntity<Void> addToCart(@PathVariable String itemId, @PathVariable int qty, @PathVariable String sessionId) {
    if (userService.checkToken(sessionId)) {
      userService.updateToken(sessionId);
      String addedItemId = userService.addToCart(itemId, qty, sessionId);

      if (addedItemId != null) {
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(addedItemId)
          .toUri();
        return ResponseEntity.created(uri).build();
      }
    }
    userService.logout(sessionId);
    return ResponseEntity.notFound().build();
  }

  @CrossOrigin(origins = { "*" })
  @PostMapping("/{sessionId}/orders")
  public ResponseEntity<Void> placeOrder(@RequestBody List<Item> items, @PathVariable String sessionId) {
    if (userService.checkToken(sessionId)) {
      userService.updateToken(sessionId);
      boolean isSuccessful = true;
      for (Item item : items) {
        int qty = userService.removeFromCart(item.getItemId(), sessionId);
        isSuccessful = isSuccessful && userService.placeOrder(item.getItemId(), qty, sessionId);
      }
      if (isSuccessful) {
        return ResponseEntity.noContent().build();
      }
    }
    userService.logout(sessionId);
    return ResponseEntity.notFound().build();
  }

  @CrossOrigin(origins = { "*" })
  @GetMapping("/{sessionId}/cart/remove/{itemId}")
  public ResponseEntity<Void> removeFromCart(@PathVariable String itemId, @PathVariable String sessionId) {
    if (userService.checkToken(sessionId)) {
      userService.updateToken(sessionId);
      boolean isSuccessful  = (userService.removeFromCart(itemId, sessionId) != 0);

      if (isSuccessful) {
        return ResponseEntity.noContent().build();
      }
    }
    userService.logout(sessionId);
    return ResponseEntity.notFound().build();
  }


}