package com.test.projectfe.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/caridokter/")
public class CariDokter {

    @GetMapping("index")
    public String index() {
        return "cariDokter/index.html";
    }
}
