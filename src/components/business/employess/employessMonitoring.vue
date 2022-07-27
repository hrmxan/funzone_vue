<template>
  <div class="top_title_control">
    <h3 class="regist__past__title">Setting works hour and price</h3>
    <div class="buttons">
      <a href="#" class="button-free">Delete zone</a>
      <a href="#" class="button-full">Edit contents</a>
    </div>
  </div>
  <div class="row cat__row employes_row">
    <h3 class="section_mini_title">Employees</h3>
    <div data-aos="fade-up" class="cat__col col-lg-4 col-sm-6 col-12">
      <a href="my_employes_add_form.html" class="cat__card my__zone_card h-100 my_zone_plus employes">
        <h4>Falonchiev Pistonchi</h4>
        <p>falonchishchi@gmail.com</p>
      </a>
    </div>
    <div data-aos="fade-up" class="cat__col col-lg-4 col-sm-6 col-12">
      <a href="my_employes_add_form.html" class="cat__card my__zone_card h-100 my_zone_plus employes">
        <h4>Falonchiev Pistonchi</h4>
        <p>falonchishchi@gmail.com</p>
      </a>
    </div>
  </div>
  <form class="login__form">
    <h3 class="section_mini_title">The name of sport complex</h3>
    <div class="sport__comp__imgs">
      <div class="img_wrap">
        <img class="img_cont" src="@/assets/img/main__mini__card.png" alt="sport">
        <div class="kres">
          <img src="@/assets/img/svg/kres_dan.svg" alt="sda">
        </div>
      </div>
      <div class="img_wrap">
        <img class="img_cont" src="@/assets/img/main__mini__card2.png" alt="sport">
        <div class="kres">
          <img src="@/assets/img/svg/kres_dan.svg" alt="sda">
        </div>
      </div>
      <div class="img_wrap">
        <img class="img_cont" src="@/assets/img/main__mini__card3.png" alt="sport">
        <div class="kres">
          <img src="@/assets/img/svg/kres_dan.svg" alt="sda">
        </div>
      </div>
      <div class="img_wrap">
        <img class="img_cont" src="@/assets/img/main__mini__card4.png" alt="sport">
        <div class="kres">
          <img src="@/assets/img/svg/kres_dan.svg" alt="sda">
        </div>
      </div>
      <div class="img_wrap">
        <img class="img_cont" src="@/assets/img/main__mini__card3.png" alt="sport">
        <div class="kres">
          <img src="@/assets/img/svg/kres_dan.svg" alt="sda">
        </div>
      </div>
    </div>

    <div class="uploat__input">
      <label for="uploadImg" class="uploat__input_label">
        <input type="file" class="d-none">
        <div class="context">
          <img src="@/assets/img/svg/UploadFile.svg" alt="uplosd">
          <div class="text">
            <strong>Drop your image here or </strong>
            <p>Supports jpg and png</p>
          </div>
        </div>
        <a href="#">Upload</a>
      </label>
    </div>

    <h3 class="section_mini_title">Employees department</h3>

    <div class="row form__row bus__zone_sport monitoring__row_mini_section">
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="fullname">Employee</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/user.svg" alt="user_icon">
          <input type="text" id="fullname" placeholder="falonchi">
        </div>
      </div>

      <div class="col-12 col-sm-6 col-lg-4 d-flex align-items-end">
        <a class="button-free bus_btn btn_mini" href="#">Add employee</a>
      </div>
    </div>

    <h3 class="section_mini_title">
      Contact numbers
    </h3>

    <div class="row form__row">
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="detainput">Phone</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/tel_ic.svg" alt="user_icon">
          <input class="phone__input" type="text" id="detainput" placeholder="+ 998 (--) --- -- --">
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 d-flex align-items-end">
        <a class="button-free bus_btn btn_mini" href="#">Add number</a>
      </div>
    </div>

    <h3 class="section_mini_title">
      Space information
    </h3>

    <div class="row form__row bus__zone_sport monitoring__row_mini_section">
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="my__select">
          <label for="detainput">Category</label>
          <div class="input_body">
            <img class="first" src="@/assets/img/svg/sportzone.svg" alt="user_icon">
            <span class="select__value">Football stadium</span>
            <img class="first" src="@/assets/img/svg/vniz.svg" alt="user_icon">
          </div>
          <div class="select__options">
            <label for="sportZone">
              <input type="range">
              Football stadium1
            </label>
            <label for="sportZone">
              <input type="range">
              Football stadium1
            </label>
            <label for="sportZone">
              <input type="range">
              Football stadium1
            </label>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <label for="fullname">Space capacity</label>
        <div class="input_body">
          <img class="first" src="@/assets/img/svg/capacity.svg" alt="user_icon">
          <input type="text" id="fullname" placeholder="Space capacity">
        </div>
      </div>
    </div>

    <div class="description monitoring__row_mini_section">
      <h4>Description</h4>
      <div class="description__body">
        <img src="@/assets/img/svg/list.svg" alt="icon">
        <p>
          Minifootball is the most popular played sport in the world. What separates football from minifootball is the
          size of the pitch, goals and number of players. Minifootball is played across the globe in different versions
          of 5,6,7,8aside mainly on artificial grass but also on natural grass. It is the most widespread sport in the
          world, which many millions of amateur players play on a regular basis all year round.
        </p>
      </div>
    </div>


    <h3 class="section_mini_title">Set working hour and price</h3>
    <div class="bus__week_nav">
      <a class="mute_buttons active" href="#">
        Mon
      </a>
      <a class="mute_buttons" href="#">
        Tue
      </a>
      <a class="mute_buttons" href="#">
        Wed
      </a>
      <a class="mute_buttons" href="#">
        Thu
      </a>
      <a class="mute_buttons" href="#">
        Fri
      </a>
      <a class="mute_buttons" href="#">
        Sat
      </a>
      <a class="mute_buttons" href="#">
        Sun
      </a>
    </div>
    <div class="colors__control">
      <div class="color">
        <span class="color__drob dark"></span>
        <p>Doesn’t work</p>
      </div>
      <div class="color">
        <span class="color__drob green"></span>
        <p>Doesn’t work</p>
      </div>
      <div class="color">
        <span class="color__drob red"></span>
        <p>Doesn’t work</p>
      </div>
      <div class="color">
        <span class="color__drob blue"></span>
        <p>Doesn’t work</p>
      </div>
    </div>
    <div class="table_scroll monitoring__row_mini_section">
      <table class="bus__week_table">
        <tbody>
          <tr class="top">
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
          </tr>
          <tr class="body">
            <th>
              <div class="th_body">
                <img src="@/assets/img/svg/Shade.svg" alt="wether_ic">
                Morning
              </div>
            </th>
            <td>
              <div class="situation mute_buttons closed">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free_vew">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free_vew">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free_vew">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons start__now">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Stop Game</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="bus__week_table">
        <tbody>
          <tr class="top">
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
          </tr>
          <tr class="body">
            <th>
              <div class="th_body">
                <img src="@/assets/img/svg/Shade.svg" alt="wether_ic">
                Morning
              </div>
            </th>
            <td>
              <div class="situation mute_buttons closed">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="bus__week_table">
        <tbody>
          <tr class="top">
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
            <td>
              <span>3:00</span>
            </td>
          </tr>
          <tr class="body last">
            <th>
              <div class="th_body">
                <img src="@/assets/img/svg/Shade.svg" alt="wether_ic">
                Morning
              </div>
            </th>
            <td>
              <div class="situation mute_buttons closed">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
            <td>
              <div class="situation mute_buttons free">
                <div class="control__body monitoring__tabel_control">
                  <p class="this__time">11:00 - 12:00</p>
                  <a class="mute_buttons" href="#"><span>Start</span></a>
                </div>
                <strong class="playing_now">Now playing</strong>
                <p class="left_time">
                  Left :
                  <span>16:31</span>
                </p>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="login__regist">
      <a class="button-free" href="busines__zone.html">Back</a>
      <a class="button-full" href="confirm__num.html">Save changes</a>
    </div>

  </form>
</template>

<script>
  export default {

  }
</script>

<style>

</style>