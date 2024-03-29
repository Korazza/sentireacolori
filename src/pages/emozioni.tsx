import { useEffect, useState } from 'react'
import Image from 'next/image'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/Emozioni.module.css'
import tristezza from '../../public/images/emozioni/tristezza.png'
import rabbia from '../../public/images/emozioni/rabbia.png'
import felicita from '../../public/images/emozioni/felicita.png'

interface Emotion {
	backgroundColor: string
	name: string
	content: string
}

const EMOTIONS: Emotion[] = [
	{
		backgroundColor: '#f5ae9e',
		name: 'la tristezza',
		content: `<p>
		Non esiste una vita senza tristezza, è quasi impossibile non
		sperimentarla almeno una volta, ed è giusto provarla.
		<strong>
			Lei ci aiuta a crescere, a maturare, a capire quando è
			il momento di prenderci un momento per noi.
		</strong>
		Lei ci aiuta a
		rimanere con i piedi per terra, perché, siamo sinceri, la vita
		non è per niente una passeggiata. Nella vita
		<i>
			è difficile che non si sperimenti
			la tristezza.
		</i>
	</p>
	<p>
		Facendo un esempio banale: da bambini anche quando si chiedeva di
		mangiare un gelato, e i nostri genitori, o i nostri nonni ci
		rispondevano di
		no, diventavamo tristi, arrabbiati perché noi in quel momento
		desideravamo mangiarlo, lo volevamo a tutti i costi. Vero?
		Anche solo il fatto di amare qualcuno, di poterlo perdere, ci rende
		tristi.
		La tristezza non è mai assoluta o sempre presente o sempre assente,
		arriva a tratti, a tratti fa male, a tratti menomale. Da piccoli si
		tendeva a
		dimostrare di più la nostra tristezza, magari piangendo, urlando,
		facendo
		i capricci, e
		<strong>
			<u>
				<i>
					da piccoli hanno sempre tentato di distrarci, di farci
					pensare piú a delle cose belle che tristi, a farci ridere.
				</i>
			</u>
		</strong>
	</p>`,
	},
	{
		backgroundColor: '#f1c9c0',
		name: 'la rabbia',
		content: `<p>
		La rabbia è una di quelle emozioni che ci insegnano a guardare
    come una cosa sbagliata. Io dico che non lo sia, è giusto provarle
    tutte, No? Sono quel che sono. Okay, la rabbia su alcune persone
    sfocia in ira, ma..
	</p>
	<p>
		<strong>
			ehi non si puó essere perfetti!
		</strong>
	</p>
	<p>
		Parlando seriamente,
		<u>
			l’ira è una brutta cosa da gestire lo so, è tosta.
		</u>
		Come ho letto in un libro
		<strong>
			è una specie di DRAGO dormiente
			la rabbia,
		</strong>
		che vive nella profondità dentro di noi, ma quando esce
		e non ne abbiamo l’assoluto controllo, eccola la che arriva l’ira,
		quella che ti fa dire e fare cose che non vorresti.
	</p>
	<p>
		La rabbia è un pugno in pieno stomaco, ci fa dire cose che magari
		non pensiamo realmente, ci fa fare azioni che non vorremmo compiere,
		la rabbia è una delle emozioni più forti che difficilmente non
		proveremmo mai. La rabbia è un fuoco che tutti noi abbiamo, chi più
		alimentato, chi più tenue, affievolito. Ma mai va sottovalutato.
	</p>`,
	},
	{
		backgroundColor: '#f5ae9e',
		name: 'la felicità',
		content: `<p>
		Sappiamo tutti che la vita è come una specie di altalena, delle
    volte abbiamo dei picchi di felicità, delle volte è troppo lenta..
	</p>
	<p>
		<strong>
		Ma poi dove sarebbe il divertimento se fosse sempre e
		solo così? Diventerebbe monotona.
		</strong>
	</p>
	<p>
		La vita ci prende a calci in faccia ogni giorno, ci mette davanti
		davvero tanti ostacoli, e le emozioni negative sono quelle che la
		maggior parte del tempo prendono il sopravvento.
	</p>
	<p>
		Perciò sta a noi prendere in mano la situazione e cambiarla,
		rovesciare una situazione del cavolo e renderla quantomeno
		sopportabile.
		<strong>
			La felicità assoluta non esiste! Scordati di essere
			ogni giorno felice..
		</strong>
	  Okay detta così è sicuramente sbagliato, ci
		saranno sicuramente periodi in cui sarai felice eh però è una
		specie di altalena.. Oscilliamo da un’emozione all’altra, ed è
		giusto così.
	</p>`,
	},
]

export default function Emozioni() {
	const [emotionIndex, setEmotionIndex] = useState(0)
	const emotion = EMOTIONS[emotionIndex]

	const handlePrevious = () => {
		if (emotionIndex > 0)
			setEmotionIndex((prevEmotionIndex) => prevEmotionIndex - 1)
	}

	const handleNext = () => {
		if (emotionIndex < EMOTIONS.length - 1)
			setEmotionIndex((prevEmotionIndex) => prevEmotionIndex + 1)
	}

	return (
		<main
			className={styles.container}
			style={{ backgroundColor: emotion.backgroundColor }}
		>
			<Navbar />
			{emotionIndex > 0 ? (
				<button className={styles.emotionPrevious} onClick={handlePrevious}>
					&#8592;
				</button>
			) : null}
			{emotionIndex < EMOTIONS.length - 1 ? (
				<button className={styles.emotionNext} onClick={handleNext}>
					&#8594;
				</button>
			) : null}
			<section className={styles.section}>
				<div
					className={styles.imgContainer}
					style={{
						left: '40%',
						bottom: '22%',
						width: '70%',
						height: '70%',
					}}
				>
					<Image
						src={tristezza}
						alt='tristezza'
						fill={true}
						sizes='(max-width: 768px) 33vw, (max-width: 1280px) 100vw'
						placeholder='blur'
						style={{
							opacity: emotion.name === 'la tristezza' ? 1 : 0,
						}}
					/>
				</div>
				<div
					style={{
						left: '30%',
						bottom: '18%',
						width: '80%',
						height: '80%',
					}}
					className={styles.imgContainer}
				>
					<Image
						src={rabbia}
						alt='rabbia'
						fill={true}
						sizes='(max-width: 768px) 33vw, (max-width: 1280px) 100vw'
						placeholder='blur'
						style={{
							opacity: emotion.name === 'la rabbia' ? 1 : 0,
						}}
					/>
				</div>
				<div
					className={styles.imgContainer}
					style={{
						left: '32%',
						bottom: '22%',
						width: '80%',
						height: '80%',
					}}
				>
					<Image
						src={felicita}
						alt='felicità'
						fill={true}
						sizes='(max-width: 768px) 33vw, (max-width: 1280px) 100vw'
						placeholder='blur'
						style={{
							opacity: emotion.name === 'la felicità' ? 1 : 0,
						}}
					/>
				</div>
				<h1>
					Ti spiego
					<br />
					cos&apos;è
				</h1>
				<div className={styles.emotion}>{emotion.name}</div>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: emotion.content }}
				/>
			</section>
			<Footer />
		</main>
	)
}
