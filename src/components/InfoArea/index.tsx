import { formatCurrentMonth } from "../../helpers/dateFilter";
import * as C from "./styles";

import { ResumeItem } from "../ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
                           currentMonth,
                           onMonthChange,
                           income,
                           expense,
                         }: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
      <C.Container>
        <C.MonthArea>
          <C.MonthArrow onClick={handlePrevMonth}>
            <C.Image src="/images/arrow-left.png" />
          </C.MonthArrow>
          <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
          <C.MonthArrow onClick={handleNextMonth}>
            <C.Image src="/images/arrow-right.png" />
          </C.MonthArrow>
        </C.MonthArea>
        <C.ResumeArea>
          <ResumeItem title="Income" value={income} />
          <ResumeItem title="Expenses" value={expense} />
          <ResumeItem
              title="Balance"
              value={income - expense}
              color={income - expense < 0 ? "red" : "green"}
          />
        </C.ResumeArea>
      </C.Container>
  );
};
