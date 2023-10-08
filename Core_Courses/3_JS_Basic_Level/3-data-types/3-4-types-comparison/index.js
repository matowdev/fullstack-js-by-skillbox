// булева сравнения
true === true; // true
true !== true; // false
true === false; // false
true !== false; // true

// сравнение разных типов
false !== 0; // true
true !== 1; // true
false !== ''; // true
true !== 'true'; // true
0 !== ''; // true
3 !== '3'; // true

// сравнение одинаковых строк с разными кавычками
'строка' === 'строка'; // true
'строка' === `строка`; // true
('строка' === 'строка') === 'строка'; // false, т.к. true != 'строке';
'строка1' !== 'строка2'; // true

// по символьное сравнение разных строк (unicode значения)
'z' > 'a'; // true, 122 > 97
'az' > 'axz'; // true, z > x
'z' > 'Z'; // true, 122 > 90
'10' < '5'; // true, 1 < 5
'10' > '05'; // true, 1 > 0

// сравнение строк и чисел, преобразование к числу
'10' > 5; // true, number 10 > 5
10 > '5'; // true, 10 > number 5
10 > 'x'; // false, 10 !> NaN
10 < 'x'; // false, 10 !< NaN

// сравнение чисел/строк с булева, преобразование к число (и того и другого)
1 > false; // true, 1 > 0
0 < true; // true, 0 < 1
'10' > true; // true, 10 > 1
'1' > true; // false, 1 !> 1
'1' > false; // true, 1 > 0
'x' > true; // false, NaN !> 1
