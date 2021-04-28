import { format as formatDate, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default (date: Date | string, format = 'd MMM yy', shouldParseISO = false, locale = ptBR): string => {
	const dateToFormat = shouldParseISO ? parseISO(date.toString()) : (date as Date);

	return formatDate(dateToFormat, format, {
		locale,
	});
}
