
function timer(time) {

	$("#timer-number").css("border-color", "transparent");

	var i = time;

	var timer = setInterval(function() {

		if (i == time) {
			$(".filler").css(
					"animation",
					"opa " + time + "s steps(1, end) reverse, cor " + time
							+ "s ");

			$(".mask").css("animation", "opa " + time + "s steps(1, end)");
			$(".spinner").css("animation",
					"rota " + time + "s linear, cor " + time + "s ");

			$("#timer-number").css("animation", "cor2 " + time + "s ");

		}

		$("#timer-number")[0].textContent = i;

		if (i == 0) {
			clearInterval(timer);

			$("#timer-number").css("border-color", "#b10000");

			$(".filler").css("animation", "");
			$(".mask").css("animation", "");
			$(".spinner").css("animation", "");
			$("#timer-number").css("animation", "");

		}

		i--;

	}, 1000);

}

window.onload=function(){
	timer(60);
}