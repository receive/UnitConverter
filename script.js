$(function(){
	
	//Clear all forms
	$('input').val('');

	//Bind temperature inputs
	$('.Temp').bind('change paste keyup', Temperature_Calculate);
	$('.Distance').bind('change paste keyup', Distance_Calculate);
});

function Distance_Calculate()
{
	var Mi,Ft,In,Km,M,Cm;
	var Value;


	Value = parseFloat($(this).val());

	if(isNaN(Value))
	{
		$('.Distance').not($(this)).val('');
		return;
	}

	switch($(this).attr('id'))
	{
		case 'Dist_Mi':
			Mi = Value;
			Ft = Mi * 5280;
			In = Ft * 12;
			Km = Mi / 0.62137;
			 M = Km * 1000;
			Cm = M * 100;
		break;
		case 'Dist_Ft':
			Ft = Value;
			Mi = Ft * 0.00018939;
			In = Ft * 12;
			Km = Mi / 0.62137;
			 M = Km * 1000;
			Cm = M * 100;
		break;
		case 'Dist_In':
			In = Value;
			Ft = In / 12;
			Mi = Ft * 0.00018939;
			Km = Mi / 0.62137;
			 M = Km * 1000;
			Cm = M * 100;
		break;
		case 'Dist_Km':
			Km = Value;
			In = Km / 0.0000254;
			Ft = In / 12;
			Mi = Ft * 0.00018939;
			 M = Km * 1000;
			Cm = M * 100;
		break;
		case 'Dist_M':
			 M = Value;
			Km = M / 1000;
			Cm = M * 100;
			In = M / 0.0254;
			Ft = In / 12;
			Mi = Ft * 0.00018939;
		break;
		case 'Dist_Cm':
			Cm = Value;
			Km = Cm / 100000;
			 M = Cm / 100;
			In = Cm * 0.39370;
			Ft = In / 12;
			Mi = Ft * 0.00018939;
		break;

	}

	//Round
	Mi = Math.round(Mi * 100) / 100;
	Ft = Math.round(Ft * 100) / 100;
	In = Math.round(In * 100) / 100;
	Km = Math.round(Km * 100) / 100;
	 M = Math.round( M * 100) / 100;
	Cm = Math.round(Cm * 100) / 100;


	//Set Values
	$('#Dist_Mi').not($(this)).val(Mi);
	$('#Dist_Ft').not($(this)).val(Ft);
	$('#Dist_In').not($(this)).val(In);
	$('#Dist_Km').not($(this)).val(Km);
	$('#Dist_M' ).not($(this)).val( M);
	$('#Dist_Cm').not($(this)).val(Cm);
}

function Temperature_Calculate()
{
	var F;
	var C;
	var K;
	var Value;


	Value = parseFloat($(this).val());

	if(isNaN(Value))
	{
		$('.Temp').not($(this)).val('');
		return;
	}

	switch($(this).attr('id'))
	{
		case 'Temp_F':
			F = Value;
			C = (F - 32) * (5/9);
			K = (F + 459.67) * (5/9);
		break;

		case 'Temp_C':
			C = Value;
			F = C * (9/5) + 32;
			K = C + 273.15;
		break;

		case 'Temp_K':
			K = Value;
			F = K * (9/5) - 459.67;
			C = - 273.15;
		break;
	}

	//Round
	F = Math.round(F * 100) / 100;
	C = Math.round(C * 100) / 100;
	K = Math.round(K * 100) / 100;

	//Set Values
	$('#Temp_F').not($(this)).val(F);
	$('#Temp_C').not($(this)).val(C);
	$('#Temp_K').not($(this)).val(K);
}