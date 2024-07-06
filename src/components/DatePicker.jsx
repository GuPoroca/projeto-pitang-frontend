import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import { subDays, addDays} from 'date-fns';
import './style.css';

registerLocale('pt-BR', ptBR);
setDefaultLocale('pt-BR');

//agendamento == true, para o datapicker de agendamento, false para o de nascimento
const DatePicker = ({ agendamento, selected, onDateChange }) => {
    const filterPassedTime = (time) => {
      const currentDate = new Date();
      const selectedDate = new Date(time);
  
      return currentDate.getTime() < selectedDate.getTime();
    };

    return (
      <ReactDatePicker
        selected={selected}
        onChange={(date) => onDateChange(date)}
        locale="pt-BR"
        showTimeSelect={agendamento}
        showYearDropdown={!agendamento}
        dropdownMode="select"
        timeFormat={agendamento ? "p" : undefined}
        timeIntervals={agendamento ? 60 : undefined}
        filterTime={filterPassedTime}
        minTime={new Date(0, 0, 0, 8, 0)} // 8:00am
        maxTime={new Date(0, 0, 0, 17, 0)} // 5:00pm
        minDate={agendamento ? subDays(new Date(), 0) : undefined}
        maxDate={!agendamento ? addDays(new Date(), 0) : undefined}
        dateFormat={agendamento ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy"}
        className="custom-date-picker"
      />
    );
  };

export default DatePicker;