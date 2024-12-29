package com.test.projectfe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class ProjectfeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectfeApplication.class, args);
	}

}
