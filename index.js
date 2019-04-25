
const Alexa = require('ask-sdk-core');
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Hola, estas a punto de cambiar  la historia ,puedes decir estoy listo y el nombre del personaje, recuerda que solo esta disponible la de Hidalgo y la del Mestizo';
        return handlerInput.responseBuilder
        .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./image.json'),//MENSAJE EN DISPLAY, CON IMAGEN//
                datasources: {}
            })
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
//HISTORIA DEL MESTIZO////FALTA IMAGEN DE MESTIZO//
const MestizoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MestizoIntent';
  },
  handle(handlerInput) {
    const speechText = '” Tenochtitlan”, exclama tu madre mientras otro de su sueño te inunda. Pensaba que la serpiente Quetzalcóatl se acercaba, pero no era más que el metal español. Los llenamos con oro y plumas, noble doliente ya has tenido este sueño ¿dime que sucede después?”.Opción A : El templo Mayor cúspide de la cosmovisión azteca fue destruida o la Opción B: Los españoles y los aztecas formaron una pacifica relación de estados';
    return handlerInput.responseBuilder
    
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};
//HISTORIA DE HIDALGO// /FALTA PONER IMAGEN DE EL EN EL HUB/
const HidalgoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HidalgoIntent';
  },
  handle(handlerInput) {
    const speechText = 'Eres el cura Hidalgo proveniente de Dolores previo a la independencia. Se da la conspiración de Valladolid en 1809, tras su fracaso los refugiados se van a Querétaro y entras en contacto con ideas revolucionarias. A principios de septiembre de 1810 Allende te impulsa a unirte a los independentistas ¿que decides?¿si o no?';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};
//OPCION 2//
const SiIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SiIntent';
  },
  handle(handlerInput) {
    const speechText = 'Es	la noche del 15 de septiembre y en tu mando se apoya la bandera mexicana, y gritas los nombres de los padres independentistas y recuerdas nuestros símbolos patrios con el sentimiento mas puro. ¿Sabes como termina esto?';
    return handlerInput.responseBuilder
    
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};
//OPCION 2//
const NoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NoIntent';
  },
  handle(handlerInput) {
    const speechText = 'vacilas y terminas decidiendo esperar un poco más para planearlo mejor, sin embargo los españoles te atrapan y te encarcelan. atrasando la independencia mucho tiempo. ¿Sabes como termina esto?';
    return handlerInput.responseBuilder
    
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};
//OPCIONES DEL MESTIZO//
//OPCION A//
const TemplomayorIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'TemplomayorIntent';
  },
  handle(handlerInput) {
    const speechText = 'Moctezuma fue el ultimo tlatoani y el primero en ver caer a sus dioses, tu madre recuerda con gracia y espera que prosigas su historia ¿que sucede despues?';
    return handlerInput.responseBuilder
    
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};
//OPCION B//
const PazIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PazIntent';
  },
  handle(handlerInput) {
    const speechText = 'Tu madre sabe que no duro demasiado, y los españoles traicionaron a nuestro dioses, pero algunos fueron dociles y respetaron nuestros corazones';
    return handlerInput.responseBuilder
    
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};
//INIICIALIZACION DE HISTORIAS//
const ListoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ListoIntent';
  },
  handle(handlerInput) {
    const speechText = 'Prepárate, que tomaras el rol de un personaje que puede cambiar la  historia en momentos en los cuales puedes decidir que hacer si hubieras sido ellos. Yo te avisare cuando tengas que tomar decisiones. ';
    return handlerInput.responseBuilder
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./huellas.json'),
        datasources: { 
          "bodyTemplate7Data": {
            "title": "Huellas",
            "backgroundImage": {
              "sources":[
                {
                "url":"https://s3.amazonaws.com/poesia-urbana/PoesiaBackground.jpg"
                }
              ]
            }
          }
        }
      })
      .reprompt(speechText)
      .getResponse();
      
  },
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HolamundoIntent';
    },
    handle(handlerInput) {
        const speechText = 'Holamundo!';
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
//FALTA REGRESAR A LO ULTIMO QUE SE DIJO//
const RepeatIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.RepeatIntent';
    },
    handle(handlerInput) {
        const speechText = 'Repitiendo';
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
//REPITE REGLAS //
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'Tomaras el rol de un personaje que puede cambiar la  historia en momentos en los cuales puedes decidir que hacer si hubieras sido ellos. Yo te avisare cuando tengas que tomar decisiones.';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Adios';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Lo siento no te he ententendido`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const GET_FACT_MESSAGE = '';
const HELP_MESSAGE = 'Hola, puedes decir contemos la historia sobre alguien';
const HELP_REPROMPT = '¿Cómo te puedo ayudar?';
const STOP_MESSAGE = 'Adios y <say-as interpret-as="interjection">buena suerte</say-as>';
// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        RepeatIntentHandler,
        LaunchRequestHandler,
        MestizoIntentHandler,
        HidalgoIntentHandler,
        SiIntentHandler,
        NoIntentHandler,
        TemplomayorIntentHandler,
        PazIntentHandler,
        ListoIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
