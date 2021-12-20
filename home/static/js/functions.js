// import image_avatar from '../images/default-avatar.png';

const HOST_API = '127.0.0.1:8000/api'
const HOST_IMAGES = 'http://153.127.38.250:8300/upload/avatar_user_shop/small'
//Function_of_User
function Search() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchArticles");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//Role login
function onToggle() {
  var rowId = event.target.parentNode.parentNode.getAttribute('idx');
	console.log(rowId)
  var data = document.getElementById(rowId).querySelectorAll("#function_U");
  var tokenAmount = document.getElementById(rowId).querySelectorAll(".btn");
  var role = document
    .getElementById(rowId)
    .querySelectorAll(".table-head").getAttribute('id');
  console.log(role);
  var doc2 = document.getElementById(rowId).querySelectorAll("#mycheckbox1")[0];
  console.log(doc2);
  var doc3 = document.getElementById(rowId).querySelectorAll("#mycheckbox2")[0];
  console.log(doc3);
  var doc4 = document.getElementById(rowId).querySelectorAll("#mycheckbox3")[0];
  console.log(doc4);
  var doc5 = document.getElementById(rowId).querySelectorAll("#mycheckbox4")[0];
  console.log(doc5);
  var doc6 = document.getElementById(rowId).querySelectorAll("#mycheckbox5")[0];
  console.log(doc6);
  var doc7 = document.getElementById(rowId).querySelectorAll("#mycheckbox6")[0];
  console.log(doc7);
  var doc1 = document.getElementById("mycheckbox1");
  console.log(doc1);
  tokenAmount = data[0].innerHTML;
  if (
    doc2.checked == true ||
    doc3.checked == true ||
    doc4.checked == true ||
    doc5.checked == true ||
    doc6.checked == true ||
    doc7.checked == true
  ) {
    doc2.checked = false;
    doc3.checked = false;
    doc4.checked = false;
    doc5.checked = false;
    doc6.checked = false;
    doc7.checked = false;
  } else if (tokenAmount == 1) {
    // if checked

    doc2.checked = true;
    doc3.checked = true;
    doc4.checked = true;
    doc5.checked = true;
    doc6.checked = true;
    doc7.checked = true;
  } else if (tokenAmount == 2) {
    doc2.checked = true;
    doc3.checked = false;
    doc4.checked = false;
    doc5.checked = false;
    doc6.checked = false;
    doc7.checked = false;
  } else if (tokenAmount == 3) {
    doc2.checked = false;
    doc3.checked = true;
    doc4.checked = false;
    doc5.checked = false;
    doc6.checked = false;
    doc7.checked = false;
  } else if (tokenAmount == 4) {
    doc2.checked = false;
    doc3.checked = false;
    doc4.checked = true;
    doc5.checked = false;
    doc6.checked = false;
    doc7.checked = false;
  } else if (tokenAmount == 5) {
    doc2.checked = false;
    doc3.checked = false;
    doc4.checked = false;
    doc5.checked = true;
    doc6.checked = false;
    doc7.checked = false;
  } else if (tokenAmount == 6) {
    doc2.checked = false;
    doc3.checked = false;
    doc4.checked = false;
    doc5.checked = false;
    doc6.checked = true;
    doc7.checked = false;
  } else if (tokenAmount == 7) {
    doc2.checked = false;
    doc3.checked = false;
    doc4.checked = false;
    doc5.checked = false;
    doc6.checked = false;
    doc7.checked = true;
  } else if (tokenAmount == 0 || tokenAmount == null) {
    // if unchecked

    doc2.checked = false;
    doc3.checked = false;
    doc4.checked = false;
    doc5.checked = false;
    doc6.checked = false;
    doc7.checked = false;
  }
}

function htmlbodyHeightUpdate() {
  var height3 = $(window).height();
  var height1 = $(".nav").height() + 50;
  height2 = $(".main").height();
  if (height2 > height3) {
    $("html").height(Math.max(height1, height3, height2) + 10);
    $("body").height(Math.max(height1, height3, height2) + 10);
  } else {
    $("html").height(Math.max(height1, height3, height2));
    $("body").height(Math.max(height1, height3, height2));
  }
}


//active_user
function active_user() {
  var rowId = event.target.parentNode.parentNode.id;
  console.log(rowId);
  var data = document.getElementById(rowId).querySelectorAll(".badge");
  console.log(data);
  var text = document
    .getElementById(rowId)
    .querySelectorAll("#active_U")[0]
    .querySelector(".badge");
  console.log(text);
  var tokenAmount = document
    .getElementById(rowId)
    .querySelectorAll(".btn-info");
  console.log(tokenAmount);
  var style_btn = document
    .getElementById(rowId)
    .querySelectorAll(".btn-info")[0];
  console.log(style_btn);
  tokenAmount = data[0].innerHTML;
  console.log(tokenAmount);
  if (tokenAmount == "Active") {
    style_btn.style.background = "gray";
  } else {
    data[0].innerHTML = "Active";
    text.setAttribute("style", "background: green;");
  }
}

function disabled_user() {
  var rowId = event.target.parentNode.parentNode.id;
  console.log(rowId);
  var data = document.getElementById(rowId).querySelectorAll(".badge");
  console.log(data);
  var text = document
    .getElementById(rowId)
    .querySelectorAll("#active_U")[0]
    .querySelector(".badge");
  console.log(text);
  var tokenAmount = document
    .getElementById(rowId)
    .querySelectorAll(".btn-danger");
  console.log(tokenAmount);
  var style_btn = document
    .getElementById(rowId)
    .querySelectorAll(".btn-danger")[0];
  tokenAmount = data[0].innerHTML;
  console.log(tokenAmount);
  if (tokenAmount == "Disabled") {
    style_btn.style.background = "gray";
  } else {
    data[0].innerHTML = "Disabled";
    text.setAttribute("style", "background: rgb(220,53,69);");
  }
}
var modal = document.getElementById("myModal");

var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

document.addEventListener("click", (e) => {
  const elem = e.target;
  if (elem.id === "myImg") {
    modal.style.display = "block";
    modalImg.src = elem.dataset.biggerSrc || elem.src;
    captionText.innerHTML = elem.alt;
  }
});

var span = document.getElementsByClassName("closeimg")[0];

function multi_image() {
  var main_img = document.getElementsByClassName(".main-image");
  main_img.document.addEventListener("click", (e) => {
    const elem = e.target;
    thumbs.hide();
    if (elem.id === "myImg") {
      thumbs.show();
    }
  });
}

async function onClickShop(shop_id, evt) {
	$('.check-all').prop('checked', false);
	$('.check-pos').prop('checked', false);
	$('.check-host-collection').prop('checked', false);
	$('.check-chat').prop('checked', false);
	$('.check-live-stream').prop('checked', false);
	$('.check-social-management').prop('checked', false);

	try{
		const response = await axios({
			method: 'get',
			url: `http://${HOST_API}/user-of-shop/${shop_id}`,
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			json: true
		});

		const mapUserList = response.data.map(item => {
			return (
				`<div class="item" data-value=${item.id} onClick="onClickUser(${item.cid_user})">
					<img class="ui mini avatar image"
						src=${item.avatar ? HOST_IMAGES + "/" + item.avatar : "/static/images/default-avatar.png"}
					/>
					<span class="nick-name">
						${item.nick_name}
					</span>

					<span class="title-user">
						${ item.role === 1 ? 'manager' : item.role === 2 ? 'staff' : item.role === 3 ? 'master' : 'no staff'}
					</span>
				</div>`
			)
		}).join('');

		$("#user-list").empty();

		$('.dropdown.clear-user').dropdown('clear');

		$("#user-list").append(mapUserList);
	}catch(error) {
		console.log(error)
	}

	// console.log(response)
}

async function onClickUser(user_id, evt) {
	$('.check-all').prop('disabled', false);
	$('.check-pos').prop('disabled', false);
	$('.check-host-collection').prop('disabled', false);
	$('.check-chat').prop('disabled', false);
	$('.check-live-stream').prop('disabled', false);
	$('.check-social-management').prop('disabled', false);

	
	const check_all = document.querySelector('.check-all');
	const check_pos = document.querySelector('.check-pos');
	const check_host_collection = document.querySelector('.check-host-collection');
	const check_chat = document.querySelector('.check-chat');
	const check_live_stream = document.querySelector('.check-live-stream');
	const check_social_management = document.querySelector('.check-social-management');

	try {
		const response = await axios({
			method: 'get',
			url: `http://${HOST_API}/role-login-user?user_id=${user_id}`,
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			json: true
		});

		// console.log(response.data)
		if(response.data.length > 0){
			for(const item of response.data) {
				if(item.role === 1){
					check_all.checked = true

					console.log('2222444')
					$('.check-pos').prop('checked', true);
					$('.check-host-collection').prop('checked', true);
					$('.check-chat').prop('checked', true);
					$('.check-live-stream').prop('checked', true);
					$('.check-social-management').prop('checked', true);
		
					$('.check-pos').prop('disabled', true);
					$('.check-host-collection').prop('disabled', true);
					$('.check-chat').prop('disabled', true);
					$('.check-live-stream').prop('disabled', true);
					$('.check-social-management').prop('disabled', true);
				}else {
					check_all.checked = false
				}

				if(item.role === 2){
					check_pos.checked = true
				}else {
					check_pos.checked = false
				}

				if(item.role === 3){
					check_host_collection.checked = true
				}else {
					check_host_collection.checked = false
				}

				if(item.role === 4){
					check_chat.checked = true
				}else {
					check_chat.checked = false
				}

				if(item.role === 5){
					check_live_stream.checked = true
				}else {
					check_live_stream.checked = false
				}

				if(item.role === 6){
					check_social_management.checked = true
				}else {
					check_social_management.checked = false
				}

			}	
		}else {
			$('.check-all').prop('checked', false);
			$('.check-pos').prop('checked', false);
			$('.check-host-collection').prop('checked', false);
			$('.check-chat').prop('checked', false);
			$('.check-live-stream').prop('checked', false);
			$('.check-social-management').prop('checked', false);
		}
	} catch(error) {
		console.log(error)
	}
}