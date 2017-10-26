package edu.csupomona.cs480;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Random;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

//Jaeseung Lee 
//Assignment 6
//Unit Test
class JUnitTester {

	private int value1, value2, result;
	
	@BeforeEach
	void setUp() throws Exception {
		Random r = new Random();
		value1 = r.nextInt(10)+1;
		value2 = r.nextInt(10)+1;
	}

	@Test
	void testAdd() {
		result = value1+value2;
		assertTrue(result == (value1+value2));
		System.out.println("value1: "+value1);
		System.out.println("value2: "+value2);
		System.out.println("result: "+result);
	}
}
