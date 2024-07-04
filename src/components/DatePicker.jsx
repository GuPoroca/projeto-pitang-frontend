import { useState } from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import { subDays, addDays } from 'date-fns';
import './style.css';

registerLocale('pt-BR', ptBR);
setDefaultLocale('pt-BR');


const DatePicker = ({ agendamento }) => {
    const [startDate, setStartDate] = useState();

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
      };

    return (
        <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale="pt-BR"
            showTimeSelect={agendamento}
            showYearDropdown={!agendamento}
            dropdownMode="select"
            timeFormat={agendamento ? "p" : undefined}
            timeIntervals={agendamento ? 60 : undefined}
            filterTime={filterPassedTime}
            minDate={agendamento ? subDays(new Date(), 0) : undefined}
            maxDate={!agendamento ? addDays(new Date(), 0) : undefined}
            dateFormat={agendamento ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy"}
            className="custom-date-picker"
        />
    );
};

DatePicker.propTypes = {
    agendamento: PropTypes.bool.isRequired,
};

export default DatePicker;