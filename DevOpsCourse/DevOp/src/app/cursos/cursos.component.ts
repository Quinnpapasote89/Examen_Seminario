import { Component } from '@angular/core';
declare var $: any; // Para usar jQuery en tu componente

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  title = 'Curso DevOps';
  selectedSection = { id: '', name: '', content: '' };
  userAnswers: Record<string, string> = {};
  userAnswers2: Record<string, string> = {};
  correctAnswers:Record<string, string> = {
    question1: 'Desarrollo y Operaciones',
    question2: 'Comunicación, cooperación y confianza',
    question3: 'Monitoreo Esporádico',
    question4: 'Calidad y Seguridad',
    question5: 'Gestión y Desarrollo',
    question6: 'Adaptación al mercado',
    question7: 'Pruebas automatizadas',
    question8: 'Silos y Cuellos de botella',
    question9: 'Adquisición de nuevas habilidades y responsabilidades',
    question10: 'Enfoque en valor y productividad'
  };

  correctAnswers2: Record<string, string> = {
    question1: 'Creación y configuración automática de recursos de infraestructura.',
    question2: 'Coordinación y gestión centralizada de múltiples servidores.',
    question3: 'Provisionamiento de servidores.',
    question4: 'Fusionar cambios frecuentes en un repositorio compartido.',
    question5: 'Automatizar el despliegue después de pasar por pruebas exhaustivas.',
    question6: 'Promover una cultura de colaboración entre equipos.',
    question7: 'Flexibilidad y enfoque en la automatización.',
    question8: 'Optimización de procesos y prácticas colaborativas.',
    question9: 'Automatiza la coordinación y gestión de servidores.',
    question10: 'Automatización, integración y entrega continua.'
  };
  
  

  

  preguntas = [
    {
      question: 'question1',
      pregunta: '1° ¿Qué áreas se unen en DevOps?',
      opciones: ['Desarrollo y Seguridad', 'Desarrollo y Operaciones', 'Seguridad y Operaciones']
    },
    {
      question: 'question2',
      pregunta: '2° ¿Qué se promueve como una cultura en DevOps?',
      opciones: ['Comunicación, pero no cooperación', 'Cooperación, pero no confianza', 'Comunicación, cooperación y confianza']
    },
    {
      question: 'question3',
      pregunta: '3° ¿Cuál de las siguientes NO es una práctica de DevOps?',
      opciones: ['Integración Continua', 'Monitoreo Esporádico', 'Entrega Continua']
    },
    {
      question: 'question4',
      pregunta: '4° ¿Qué se busca mejorar en cada etapa del ciclo de vida del software en DevOps?',
      opciones: ['Calidad y Seguridad', 'Rendimiento y Velocidad', 'Precio y Despliegue']
    },
    {
      question: 'question5',
      pregunta: '5° ¿Qué se facilita mediante herramientas en DevOps?',
      opciones: ['Gestión y Desarrollo', 'Comunicación y Seguridad', 'Transparencia y Colaboración']
    },
    {
      question: 'question6',
      pregunta: '6° ¿Qué se logra al reducir el tiempo entre la concepción de una idea y su puesta en producción en DevOps?',
      opciones: ['Adaptación al mercado', 'Reducción de costos', 'Menor innovación']
    },
    {
      question: 'question7',
      pregunta: '7° ¿Cuál es uno de los beneficios de DevOps relacionado con la calidad del software?',
      opciones: ['Integración de errores', 'Pruebas manuales', 'Pruebas automatizadas']
    },
    {
      question: 'question8',
      pregunta: '8° ¿Qué se promueve en DevOps para eliminar en los equipos?',
      opciones: ['Productividad y Colaboración', 'Silos y Cuellos de botella', 'Comunicación y Conflicto']
    },
    {
      question: 'question9',
      pregunta: '9° ¿Cuál es uno de los beneficios de DevOps para los profesionales del software?',
      opciones: ['Reducción de habilidades', 'Restricción de responsabilidades', 'Adquisición de nuevas habilidades y responsabilidades']
    },
    {
      question: 'question10',
      pregunta: '10° ¿Qué fomenta DevOps para los equipos de software?',
      opciones: ['Enfoque en tareas manuales', 'Enfoque en valor y productividad', 'Enfoque en conflictos y cuellos de botella']
    }
  ];

  preguntas2 = [
    {
      question: 'question1',
      pregunta: '1° ¿Qué implica el provisionamiento de servidores?',
      opciones: [
        'Creación y configuración manual de recursos de infraestructura.',
        'Creación y configuración automática de recursos de infraestructura.',
        'Gestión de recursos de infraestructura sin relación al software.'
      ]
    },
    {
      question: 'question2',
      pregunta: '2° ¿Qué objetivo cumple la orquestación de servidores?',
      opciones: [
        'Coordinación y gestión descentralizada de múltiples servidores.',
        'Coordinación y gestión centralizada de múltiples servidores.',
        'Automatización de pruebas de servidores individuales.'
      ]
    },
    {
      question: 'question3',
      pregunta: '3° ¿Qué práctica permite reducir los tiempos de inactividad y los errores humanos?',
      opciones: [
        'Automatización de procesos de entrega.',
        'Provisionamiento de servidores.',
        'Orquestación de contenedores.'
      ]
    },
    {
      question: 'question4',
      pregunta: '4° ¿Qué define la Integración Continua (CI)?',
      opciones: [
        'Fusionar cambios frecuentes en un repositorio compartido.',
        'Llevar los cambios de manera automatizada a un entorno de pruebas.',
        'Verificar la integración de código irregularmente.'
      ]
    },
    {
      question: 'question5',
      pregunta: '5° ¿Cuál es uno de los objetivos de la Entrega Continua (CD)?',
      opciones: [
        'Llevar cambios a un entorno de pruebas después de un proceso manual.',
        'Automatizar el despliegue después de pasar por pruebas exhaustivas.',
        'Pasar por un proceso de integración manual antes del despliegue.'
      ]
    },
    {
      question: 'question6',
      pregunta: '6° ¿Qué propósito tiene DevOps en relación con el Modelo Clásico?',
      opciones: [
        'División del trabajo en áreas independientes.',
        'Promover una cultura de colaboración entre equipos.',
        'Mantener silos de información y falta de transparencia.'
      ]
    },
    {
      question: 'question7',
      pregunta: '7° ¿Qué destaca al Modelo Clásico en comparación con DevOps?',
      opciones: [
        'Flexibilidad y enfoque en la automatización.',
        'Colaboración entre desarrollo y operaciones.',
        'Procesos rígidos y falta de colaboración entre equipos.'
      ]
    },
    {
      question: 'question8',
      pregunta: '8° ¿Qué busca DevOps en el ciclo de vida del software?',
      opciones: [
        'Enfoque en la automatización y entrega única del software.',
        'Optimización de procesos y prácticas colaborativas.',
        'Reducción de la integración entre equipos.'
      ]
    },
    {
      question: 'question9',
      pregunta: '9° ¿Cómo se diferencia la Orquestación de Servidores de la Integración Continua?',
      opciones: [
        'Automatiza la coordinación y gestión de servidores.',
        'Fusiona cambios frecuentes en un repositorio compartido.',
        'Coordina el monitoreo de integración de código.'
      ]
    },
    {
      question: 'question10',
      pregunta: '10° ¿Qué impulsa DevOps para la gestión del software?',
      opciones: [
        'La rigidez de procesos y la división de equipos.',
        'Automatización, integración y entrega continua.',
        'Uso de herramientas estáticas para la gestión de software.'
      ]
    }
  ]
  
  


  sections = [
    { id: '1', name: '¿Que es DevOps?', content: "<p>DevOps es una palabra que surge de la unión de <b>desarrollo</b> y <b>operaciones</b>, dos áreas que tradicionalmente han trabajado de forma separada en el ámbito del software. DevOps propone unir a estas áreas y a otras relacionadas, como la calidad, la seguridad y el negocio, para crear un flujo de trabajo más ágil, eficiente y orientado al valor para el cliente.</p> <p>DevOps no es solo una metodología, sino también una <em>cultura</em> que fomenta la comunicación, la cooperación y la confianza entre los equipos. DevOps también implica el uso de <em>prácticas</em> como la integración continua, la entrega continua, el despliegue continuo, el monitoreo continuo y la mejora continua, que permiten automatizar y optimizar el ciclo de vida del software. Además, DevOps requiere el uso de <em>herramientas</em> que facilitan la gestión, el desarrollo, el despliegue y la operación del software, como sistemas de control de versiones, plataformas de colaboración, entornos de desarrollo integrados, servidores de integración, contenedores, orquestadores, nubes, etc.</p>" },
    { id: '2', name: 'Beneficios', content: '<p>Los beneficios de DevOps son múltiples, tanto para las organizaciones como para los profesionales del software. Algunos de ellos son:</p><ul><li><b>Mayor velocidad de entrega</b>: DevOps permite reducir el tiempo entre la concepción de una idea y su puesta en producción, lo que se traduce en una mayor capacidad de innovación y adaptación al mercado.</li><li><b>Mayor calidad del software</b>: DevOps mejora la calidad del software al incorporar pruebas automatizadas, revisiones de código, integración de seguridad y monitoreo de rendimiento en cada etapa del ciclo de vida.</li><li><b>Mayor satisfacción del cliente</b>: DevOps permite entregar software que cumple con las expectativas y necesidades de los clientes, y que se puede actualizar y mejorar de forma continua según su retroalimentación.</li><li><b>Mayor colaboración y productividad</b>: DevOps fomenta la colaboración y la transparencia entre los equipos, lo que elimina los silos, los cuellos de botella y los conflictos. DevOps también aumenta la productividad al eliminar las tareas manuales y repetitivas, y al permitir a los equipos enfocarse en el valor.</li><li><b>Mayor aprendizaje y crecimiento</b>: DevOps promueve el aprendizaje y el crecimiento de los profesionales del software, al brindarles la oportunidad de adquirir nuevas habilidades, conocimientos y experiencias, y de asumir nuevos retos y responsabilidades.</li></ul>' },
    { id: '3', name: 'Examen 1', content: 'Contenido del examen 1' },
    { id: '4', name: 'Modelo Clasivo vs DevOps', content: '<ul> <li><b>Modelo Clásico:</b></li> <ul> <li>Tradicionalmente, se divide el trabajo en áreas independientes como desarrollo y operaciones.</li> <li>Las diferentes etapas del ciclo de vida del software operan de forma aislada.</li> <li>Menor colaboración entre equipos.</li> <li>Procesos más rígidos y menos flexibles.</li> <li>Mayor propensión a silos de información y falta de transparencia.</li> </ul> <li><b>DevOps:</b></li> <ul> <li>Integración entre desarrollo y operaciones para trabajar de manera colaborativa.</li> <li>Enfoque en la automatización, integración y entrega continua.</li> <li>Promueve una cultura de colaboración entre equipos.</li> <li>Optimización de procesos mediante prácticas como la integración continua y el despliegue continuo.</li> <li>Uso de herramientas que facilitan la gestión y el despliegue del software.</li> </ul> </ul> ' },
    { id: '5', name: 'CI/CD', content: '<p><b>CI/CD (Integración Continua / Entrega Continua):</b></p> <p> La Integración Continua (CI) es una práctica en la que los desarrolladores integran sus cambios en un repositorio compartido con frecuencia, lo que permite detectar problemas de integración de código de manera temprana. </p> <p> Por otro lado, la Entrega Continua (CD) implica llevar los cambios a un entorno de pruebas o producción de manera automatizada, después de pasar por un proceso de integración y pruebas exhaustivas. Esto garantiza que los cambios estén listos para ser desplegados en cualquier momento. </p> <p> La implementación exitosa de CI/CD se basa en la automatización de procesos, incluyendo pruebas, compilación, integración y despliegue. Esto conduce a entregas más rápidas, frecuentes y consistentes, mejorando la calidad del software y reduciendo los errores. </p> <p> CI/CD fomenta la colaboración, la transparencia y la agilidad en el desarrollo de software al proporcionar un flujo de trabajo más eficiente y confiable para los equipos de desarrollo y operaciones. </p> <ul> <li><b>CI/CD (Integración Continua / Entrega Continua):</b></li> <ul> <li>La Integración Continua (CI) implica fusionar cambios frecuentes en un repositorio compartido, verificando la integración de código regularmente.</li> <li>La Entrega Continua (CD) lleva los cambios de manera automatizada a un entorno de pruebas o producción, asegurando que estén listos para su despliegue.</li> <li>El CI/CD busca reducir el tiempo entre la escritura del código y su despliegue, manteniendo la calidad del software y permitiendo entregas más rápidas y seguras.</li> <li>Esto se logra mediante la automatización de pruebas, compilación, integración y despliegue, minimizando errores y optimizando el ciclo de vida del software.</li> <li>Se fomenta la estandarización de procesos y la colaboración entre equipos, garantizando la entrega continua de software de alta calidad.</li> </ul> </ul> ' },
    { id: '6', name: 'Provisionamiento y orquestacion de servidores', content: '<p><b>Provisionamiento y Orquestación de Servidores:</b></p> <p> El provisionamiento de servidores implica la creación y configuración automática de recursos de infraestructura, como máquinas virtuales, contenedores o recursos en la nube, según los requisitos específicos de software. </p> <p> Esta práctica permite la rápida implementación de servidores y la gestión eficiente de recursos, lo que reduce los tiempos de inactividad y los errores humanos al eliminar tareas manuales repetitivas. </p> <p> La orquestación de servidores se refiere a la coordinación y gestión centralizada de múltiples servidores o recursos de infraestructura. Herramientas de orquestación como Kubernetes, Docker Swarm o Ansible automatizan la configuración, el despliegue, el monitoreo y el escalado de aplicaciones distribuidas. </p> <ul> <li><b>Provisionamiento:</b></li> <ul> <li>Automatiza la creación y configuración de servidores.</li> <li>Permite el despliegue rápido y consistente de infraestructura.</li> <li>Reduce errores y tiempos de implementación.</li> </ul> </ul> <ul> <li><b>Orquestación:</b></li> <ul> <li>Coordina y gestiona múltiples servidores o recursos.</li> <li>Automatiza tareas complejas de despliegue y monitoreo.</li> <li>Facilita el mantenimiento y escalado de aplicaciones.</li> </ul> </ul> ' },
    { id: '7', name: 'Examen 2', content: 'Contenido del examen 2' },
    // Agrega más secciones aquí
  ];

  selectSection(section: { id: string, name: string, content: string }) {
    this.selectedSection = section;
  }

  onAnswerChange(questionId: string, selectedOption: string) {
    this.userAnswers[questionId] = selectedOption;
  }

  onAnswerChange2(questionId: string, selectedOption: string) {
    this.userAnswers2[questionId] = selectedOption;
  }

  ngOnInit() {
    // Inicializa el modal cuando se carga el componente
    $('#resultModal').modal({ show: false });
  
    // Añade un manejador de clics al botón para cerrar el modal
    $('.btn-secondary').click(function(){
      $('#resultModal').modal('hide');
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    let incorrectAnswers = [];
    for (let questionId in this.correctAnswers) {
      console.log(questionId);
      console.log(this.userAnswers)
      console.log(this.correctAnswers[questionId]);
      console.log(this.userAnswers[questionId]);
      if (this.userAnswers[questionId] !== this.correctAnswers[questionId]) {
        incorrectAnswers.push(questionId);
      }
    }

    let resultMessage;
    if (incorrectAnswers.length > 0) {
      resultMessage = 'Las respuestas a las preguntas ' + incorrectAnswers.join(', ') + ' son incorrectas.';
    } else {
      resultMessage = '¡Todas las respuestas son correctas!';
    }

    // Muestra el mensaje de resultado en el modal y lo muestra
    $('#resultModalBody').text(resultMessage);
    $('#resultModal').modal('show');
  }

  onSubmit2(event: Event) {
    event.preventDefault();
    console.log('Holla');
    console.log(this.userAnswers2);

    let incorrectAnswers2 = [];
    for (let questionId in this.correctAnswers2) {
      if (this.userAnswers2[questionId] !== this.correctAnswers2[questionId]) {
        incorrectAnswers2.push(questionId);
      }
    }

    let resultMessage;
    if (incorrectAnswers2.length > 0) {
      resultMessage = 'Las respuestas a las preguntas ' + incorrectAnswers2.join(', ') + ' son incorrectas.';
    } else {
      resultMessage = '¡Todas las respuestas son correctas!';
    }

    // Muestra el mensaje de resultado en el modal y lo muestra
    $('#resultModalBody').text(resultMessage);
    $('#resultModal').modal('show');
  }
}
