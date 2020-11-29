import styled from '../../../../build/module/macro';

console.log(
	styled(
		['bg-white', 'selectable', 'web:not-selectable', 'dark:bg-black'],
		{
			dark: false,
		}
	)
);
