export default () => {
  const views = `
      <!-- Inicio -->
      <div id="headerPrincipal" class="headerPrincipal">
        <header class="headerContent">
          <a id="logoPrincipal404" class="logoPrincipal404" href="#"><img class="imgLogoPrincipal404" src="img/logo2-01.png" alt=""></a>
        </header>
      </div>
      <div class="bodyNotFound">
      <h1>Error 404 página no encontrada</h1>;
      </div>
      <div  class="BtnReturn">
      <a id="btnReturn" href="#/home">Regresar</a>
    </div>
      <!--  -->
      <div class="footer">
        <p>© 2020 Old Beat Music</p>
      </div>
      </div>
      <!-- Fin -->
      `;
  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  return divElement;
};
