package br.com.euphoria.cucumber.stepdefs;

import br.com.euphoria.EuphoriaJavav1App;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = EuphoriaJavav1App.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
