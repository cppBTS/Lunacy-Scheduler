package edu.csupomona.cs480;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.Days;
import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

import edu.csupomona.cs480.data.Date;
import edu.csupomona.cs480.data.DateTime;
import edu.csupomona.cs480.data.RealUser;
import edu.csupomona.cs480.data.Schedule;
import edu.csupomona.cs480.data.Scheduler;
import edu.csupomona.cs480.data.Time;
import edu.csupomona.cs480.data.TimeFrame;
import edu.csupomona.cs480.data.Unavailability;




public class Source {
	public static void main(String args[]) throws Exception {
		List<TimeFrame>temp = new ArrayList<TimeFrame>();
		temp.add(new TimeFrame(new Time(0,0), new Time(10,0)));
		temp.add(new TimeFrame(new Time(18,0), new Time(23,59)));
		Schedule c = new Schedule(temp, temp, temp, temp, temp, temp, temp, new Date(2017, 10, 22), new Date(2017, 10, 31));
		Unavailability testU1 = new Unavailability();
		testU1.addSchedule(c);
		RealUser testUser = new RealUser("111", "Justin Han", null, testU1);
		
		List<TimeFrame>temp2 = new ArrayList<TimeFrame>();
		temp2.add(new TimeFrame(new Time(0,0), new Time(11,0)));
		temp2.add(new TimeFrame(new Time(18,0), new Time(23,59)));
		Schedule d = new Schedule(temp2, temp2, temp2, temp2, temp2, temp2, temp2, new Date(2017, 10, 22), new Date(2017, 10, 31));
		Unavailability testU2 = new Unavailability();
		testU2.addSchedule(d);
		RealUser testUser2 = new RealUser("112", "Ubaldo Jimenez", null, testU2);
		
		List<RealUser>users = new ArrayList<>();
		users.add(testUser);
		users.add(testUser2);
		Scheduler testScheduler = new Scheduler(new Date(2017,10,23), new Date(2017,10,23), users);
		List<DateTime> availableTime = testScheduler.findAvailableSchedules();
		System.out.println(availableTime);
	}
	
}
