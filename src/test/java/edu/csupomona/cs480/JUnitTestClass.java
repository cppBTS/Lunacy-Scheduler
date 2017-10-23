package edu.csupomona.cs480;

import static org.junit.Assert.*;

import org.junit.Test;

import edu.csupomona.cs480.data.Date;
import edu.csupomona.cs480.data.DayType;
import edu.csupomona.cs480.data.Schedule;
import edu.csupomona.cs480.data.Time;
import edu.csupomona.cs480.data.TimeFrame;

// Johnny Lu 
// Assignment 6
// Unit Test
public class JUnitTestClass {

	@Test
	public void test() {
		Date today = new Date(10, 22, 2017, DayType.SUNDAY);
		Date tomorrow = new Date(10, 23, 2017, DayType.MONDAY);
		Time noon = new Time(12, 00);
		Time midnight = new Time(24, 00);
		TimeFrame noonToMidnight = new TimeFrame(noon, midnight);
		TimeFrame twelveHours = new TimeFrame(new Time(12, 00), new Time(24, 00));
		assertEquals(noonToMidnight, twelveHours);
	}

}
