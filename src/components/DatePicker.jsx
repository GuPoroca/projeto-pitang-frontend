import { useState } from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import './style.css';

registerLocale('pt-BR', ptBR);
setDefaultLocale('pt-BR');


const DatePicker = ({ time }) => {
    const [startDate, setStartDate] = useState();
    return (
        <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale="pt-BR"
            showTimeSelect={time}
            showYearDropdown={!time}
            dropdownMode="select"
            timeFormat={time ? "p" : undefined}
            timeIntervals={time ? 60 : undefined}
            dateFormat={time ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy"}
            className="custom-date-picker"
        />
    );
};

DatePicker.propTypes = {
    time: PropTypes.bool.isRequired,
};

export default DatePicker;