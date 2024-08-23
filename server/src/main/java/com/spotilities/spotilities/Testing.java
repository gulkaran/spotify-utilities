package com.spotilities.spotilities;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class Testing {

    @GetMapping("/api/test")
    public List<String> greeting() {
        return List.of("Hello World");
    }
}
