//Initialized Calendar 

$(document).ready(function() {
				
				flag = true;
		
				$('#calendar').fullCalendar({
					defaultDate: new Date(),
					editable: true,
					navLinks: true, // can click day/week names to navigate views
					eventLimit: true, // allow "more" link when too many events
					header: {
				        left: 'prev,next today',
				        center: 'title',
				        right: 'switchView month,agendaWeek,agendaDay,listMonth,listWeek,listDay '
				    },
				    customButtons: {
				        switchView: {
				            text: 'View: Agenda',
				            click: function() {
				            	
				            	var view = $('#calendar').fullCalendar('getView');
				            	
				            	if(view.name == "month"){
				            		$('#calendar').fullCalendar('changeView', 'listMonth');
				            	}
				            	
				            	else if(view.name == "agendaWeek"){
				            		$('#calendar').fullCalendar('changeView', 'listWeek');
				            	}
				            	
				            	else if(view.name == "agendaDay"){
				            		$('#calendar').fullCalendar('changeView', 'listDay');
				            	}
				            	else if(view.name == "listMonth"){
				            		$('#calendar').fullCalendar('changeView', 'month');
				            	}
				            	
				            	else if(view.name == "listWeek"){
				            		$('#calendar').fullCalendar('changeView', 'agendaWeek');
				            	}
				            	
				            	else if(view.name == "listDay"){
				            		$('#calendar').fullCalendar('changeView', 'agendaDay');
				            	}
				            	
				            	changeViews();
				            }
				        }
				    },
				    buttonText: {
				    	month: "Month",
				    	agendaWeek: "Week",
				    	agendaDay: "Day",
				    	listWeek: "Week",
				    	listDay: "Day"
				    },
					events: [
						{
							title: 'All Day Event',
							start: '2017-10-01'
						},
						{
							title: 'Long Event',
							start: '2017-10-07',
							end: '2017-10-10'
						},
						{
							id: 999,
							title: 'Repeating Event',
							start: '2017-10-09T16:00:00'
						},
						{
							id: 999,
							title: 'Repeating Event',
							start: '2017-10-16T16:00:00'
						},
						{
							title: 'Conference',
							start: '2017-10-11',
							end: '2017-10-13'
						},
						{
							title: 'Meeting',
							start: '2017-10-12T10:30:00',
							end: '2017-10-12T12:30:00'
						},
						{
							title: 'Lunch',
							start: '2017-10-12T12:00:00'
						},
						{
							title: 'Meeting',
							start: '2017-10-12T14:30:00'
						},
						{
							title: 'Happy Hour',
							start: '2017-10-12T17:30:00'
						},
						{
							title: 'Dinner',
							start: '2017-10-12T20:00:00'
						},
						{
							title: 'Birthday Party',
							start: '2017-10-13T07:00:00'
						},
						{
							title: 'Click for Google',
							url: 'http://google.com/',
							start: '2017-10-28'
						}
					]
				});
				
				changeViews();
			});
			
function changeViews(){
	
	if(flag){

		$(".fc-listMonth-button").hide();
		$(".fc-listWeek-button").hide();
    	$(".fc-listDay-button").hide();
    	$(".fc-month-button").show();
    	$(".fc-agendaWeek-button").show();
    	$(".fc-agendaDay-button").show();
    	
    	$(".fc-switchView-button").text('View: Agenda');
    	
	}else{
		
		$(".fc-listMonth-button").show();
		$(".fc-listWeek-button").show();
    	$(".fc-listDay-button").show();
    	$(".fc-month-button").hide();
    	$(".fc-agendaWeek-button").hide();
    	$(".fc-agendaDay-button").hide();
    	
    	$(".fc-switchView-button").text('View: List');
	}
	
	flag = !flag;
}