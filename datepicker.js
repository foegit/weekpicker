function datepicker($calendar) {
  let currentDay;
  const $datepicker = $("#datepicker").datepicker({ onSelect: function(date) {
    const fullDate = $(this).datepicker('getDate');
    let dayNumber = fullDate.getUTCDay() + 2;
    dayNumber = dayNumber > 7? dayNumber - 7: dayNumber;
    $calendar.weekCalendar('gotoWeek', date);
    currentDay = dayNumber;
    
    const headerDaysElement = $('.wc-header>table>tbody>tr').find('[class^=wc-day-]');
    for(let i =0; i < headerDaysElement.length; i++) {
      const classList = headerDaysElement[i].classList;
      if ([...classList].includes(`wc-day-${currentDay}`)) {
        $(headerDaysElement[i]).addClass('activeDatePicker');
      } else {
        $(headerDaysElement[i]).removeClass('activeDatePicker');
      }
    }
    const a = $('.wc-day-column.ui-state-default, [class^=day]');

    a.each(index => {
      $(a[index]).hasClass(`day-${currentDay}`) 
        ? $(a[index]).addClass('activeDatePicker')
        : $(a[index]).removeClass('activeDatePicker');
    });
  }
  });
  
}
