package edu.csupomona.cs480;

import static org.junit.Assert.*;

import org.junit.Test;

import edu.csupomona.cs480.data.Schedule;
import edu.csupomona.cs480.data.Time;
import edu.csupomona.cs480.data.TimeFrame;

/**
 * Unit test for scheduler.
 */
public class ScheduleTest {
	@Test
	public void testGetBestSchedule() {
		TimeFrame testTimes[] = new TimeFrame[7];
		TimeFrame testTimes2[] = new TimeFrame[7];
		Schedule a = new Schedule(testTimes);
		Schedule b = new Schedule(testTimes2);
		TimeFrame best = new TimeFrame(new Time(1,20), new Time(2,30));
		TimeFrame tested = a.findbestTime(b);

		assertEquals(best, tested);

	}
}
