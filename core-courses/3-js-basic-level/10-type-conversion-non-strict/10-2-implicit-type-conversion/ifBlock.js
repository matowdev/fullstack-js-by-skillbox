// ** неявные преобразования, блок if
if ('false') {
} // всегда true или false (в скобках)

if (Boolean('false')) {
} // то же самое, явно..

if (('' && 0) || 32.3) {
} // (false && false) || true -> false || true -> true

if (Boolean(('' && 0) || 32.3)) {
} // то же самое, явно.. излишне
