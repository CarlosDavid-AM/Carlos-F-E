const barra = document.getElementById('barra');
const pie = document.getElementById('pie')

function createBarra() {
    const barraContent = 
    `<div class="relative">
        <div class="fixed z-20 w-full">
            <div class="bg-gray-50 py-3">
              <div class="flex container mx-auto justify-between items-center">
                  <div>
                      <img src="/img/Logo.png" alt="Logo" class="h-7">
                  </div>
                  <div class="flex gap-x-4 text-sm">
                      <a href="/">Inicio</a>
                      <a href="proyectos.html">Proyectos Web</a>
                      <a href="acercaDeMi.html">Acerca de Mi</a>
                  </div>
                  <div>
                      <a class="btn-orange" href="contacto.html">
                          Contactame
                      </a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>`;

    barra.innerHTML = barraContent;
}

function createPie() {
    const pieContent = 
    `<div class="-mb-60 relative z-10">
    <div style="background: no-repeat center url(/img/svg/fondo.svg); background-size: cover;" 
     class="m-14 py-40 rounded-lg">
    <div class="text-center flex flex-col items-center">
        <h1 class="font-semibold text-2xl">
            Trabajemos juntos y creemos un nuevo caso de éxito
        </h1>
        <div class="pt-9 flex gap-x-9 items-center">
            <a href="" class="btn-orange">
                Contactame
            </a>
            <div class="flex items-center gap-x-2">
                <a href="" class="font-light">
                    Mira mis proyectos
                </a> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    </div>
</div>
</div>

<div class="bg-gray-100 pt-72 relative z-0">
    <div class="container mx-auto pr-16 flex justify-between">
        <div class="flex flex-col gap-y-9">
            <div>
                <img class="h-8" src="/img/Logo.png" alt="Logo">
            </div>
            <div class="flex justify-between">
                <div class="flex justify-between py-12 gap-x-3 items-center">
                    <img class="h-6" src="/img/svg/linkedin.svg" alt="linkedin">
                    <img class="h-7" src="img/svg/facebook.svg" alt="facebook">
                    <img class="h-8" src="img/svg/whatsapp.svg" alt="whatsapp">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-y-9 text-sm">
            <div class="flex flex-col gap-y-6">
                <div class="flex ">
                    <a href="/">Inicio</a>
                    <a href="acercaDeMi.html" class="pl-20">Acerca de mi</a>
                </div>
                <div class="flex">
                    <a href="proyectos.html">Proyectos</a>
                    <a href="contacto.html" class="pl-12" >Contactame</a>
                </div>
            </div>
            <div>
                <div>
                    Contactame al:
                </div>
                <div class="flex">
                    <img class="h-8" src="/img/telefono.png" alt="telefono">
                    <span>+51 933 376 104</span>
                </div>
            </div>
        </div>
    </div>
</div>`

pie.innerHTML = pieContent
}

createBarra();
createPie();