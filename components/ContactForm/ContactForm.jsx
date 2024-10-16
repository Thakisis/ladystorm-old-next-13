import { useState } from "react"
import { useRouter } from 'next/router'
import { Neonderthaw } from 'next/font/google'
import { IconInsta, IconFb, IconMail } from '@/components/Icons'
import { sendContactForm } from "@/lib/api"
import { useTranslations } from 'next-intl'
import Link from "next/link"
import styles from './Contact.module.scss'
const neonderthaw = Neonderthaw({ weight: '400', subsets: ['latin'] })
import {
    Box,
    Flex,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Heading,
    Center,
    VStack,
    Textarea,
    Text

} from "@chakra-ui/react"


const messagei18 = ["sending", "delivered", "failedDelivery", "failedDelivery"]

export default function ContactForm({ locale }) {

    const router = useRouter()
    const t = useTranslations('form')
    const [inputs, setInputs] = useState({})
    const [error, setError] = useState({})
    const [statusApi, setStatusApi] = useState(-1)

    const overlayMessage = statusApi === -1 ? "" : t.rich(messagei18[statusApi], { p: children => <p>{children}</p>, })
    const styleOverlay = statusApi === -1 ? { opacity: 0, pointerEvents: "none", transition: "opacity .5s ease-in-out" } : { opacity: 1, pointerEvents: "all", transition: "opacity .5s ease-in-out" }
    const formIsValid = validateForm(inputs)

    const hover = formIsValid && statusApi === -1 ? {
        color: "#b700ff", background: "white", border: "1px solid #b700ff", boxShadow: "1px 7px 20px #ffffff"
    } : {}


    const handleChange = (e) => {

        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

        setError((prevError) => ({ ...prevError, [e.target.name]: validate(e.target.name, e.target.value) }))
    }


    const onSubmit = async () => {
        setStatusApi(0)
        setInputs((prev) => ({
            ...prev,
            isLoading: true,

        }))
        const { isLoading, ...data } = inputs

        let response = await sendContactForm(data)
        setStatusApi(response.status)

    }
    const onSubmitNotValid = () => {
        const newErrors = ['name', 'email', 'subject', 'message'].reduce((acum, name) => ({ ...acum, [name]: !validateSubmit(name, inputs[name]) }), {})
        setError((prevErrors) => ({ ...prevErrors, ...newErrors }))


    }



    return (
        <Box
            maxW="1000px"
            margin="4rem auto"
            border="1px solid"
            borderColor="#ffffff"
            borderRadius="4px"
            overflow="hidden"
        >
            <Flex boxShadow="xl" flexWrap="wrap">
                <VStack as="form" method="post" p={10} spacing={5} flex={1} className="relative">
                    <Link href="/" className={styles.close} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" >
                            <g>
                                <path id="x" d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z" />
                            </g>
                        </svg>
                    </Link>

                    <div className="absolute w-full -top-5  h-full bg-black z-50 rounded-md flex flex-col justify-center items-center" style={styleOverlay}>

                        <div >
                            <div>{overlayMessage}</div>
                            {statusApi === 1 &&
                                <div>
                                    <Link href='/'>
                                        <Button

                                            w="full"
                                            bg="#b700ff"
                                            color="white"
                                            boxShadow="1px 7px 20px rgba(243, 0, 231, 0.5);"
                                            _hover={{ color: "#b700ff", background: "white", border: "1px solid #b700ff", boxShadow: "1px 7px 20px #ffffff" }}

                                        >
                                            {t('back')}
                                        </Button>
                                    </Link>
                                </div>
                            }
                            {statusApi > 1 &&
                                <div className="flex w-full justify-around">
                                    <Link href='/'>
                                        <Button

                                            size="md"
                                            bg="#b700ff"
                                            color="white"
                                            boxShadow="1px 7px 20px rgba(243, 0, 231, 0.5);"
                                            _hover={{ color: "#b700ff", background: "white", border: "1px solid #b700ff", boxShadow: "1px 7px 20px #ffffff" }}
                                        >
                                            {t('back')}
                                        </Button>
                                    </Link>

                                    <Button

                                        size="md"
                                        bg="#b700ff"
                                        color="white"
                                        boxShadow="1px 7px 20px rgba(243, 0, 231, 0.5);"
                                        _hover={{ color: "#b700ff", background: "white", border: "1px solid #b700ff", boxShadow: "1px 7px 20px #ffffff" }}
                                        onClick={() => setStatusApi(-1)}
                                    >
                                        {t('retry')}
                                    </Button>

                                </div>
                            }
                        </div>
                    </div>
                    <FormControl id="full-name" isInvalid={error.name} isRequired>
                        <FormLabel>{t('fullname')}</FormLabel>
                        <Input
                            name="name"
                            value={inputs.name || ""}
                            onChange={handleChange}
                            placeholder={t('phName')}
                            size="md"
                            errorBorderColor="red.300"
                        />
                        <FormErrorMessage>{t('errorName')}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="email" isInvalid={error.email} isRequired>
                        <FormLabel>{t('email')}</FormLabel>
                        <Input
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                            placeholder={t('phEmail')}
                            size="md"
                            type="email"
                        />
                        <FormErrorMessage>{t('errorEmail')}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="phone" isInvalid={error.phone}>
                        <FormLabel>{t('phone')}</FormLabel>
                        <Input
                            name="phone"
                            value={inputs.phone || ""}
                            onChange={handleChange}
                            placeholder={t('phPhone')}
                            size="md"
                        />

                    </FormControl>
                    <FormControl id="subject" isRequired isInvalid={error.subject}>
                        <FormLabel>{t('subject')}</FormLabel>
                        <Input
                            name="subject"
                            value={inputs.subject || ""}
                            onChange={handleChange}
                            placeholder={t('phSubject')}
                            size="md"
                            isInvalid={error.subject}
                        />
                        <FormErrorMessage>{t('errorSubject')}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="message" isRequired isInvalid={error.message}>
                        <FormLabel>{t('message')}</FormLabel>
                        <Textarea
                            name="message"
                            value={inputs.message || ""}
                            onChange={handleChange}
                            placeholder={t('phMessage')}
                            isInvalid={inputs.message?.length < 50}
                        />
                        <FormErrorMessage>{t('errorMessage')}</FormErrorMessage>
                    </FormControl>

                    <Button
                        type="submit"
                        w="full"
                        bg={formIsValid && statusApi === -1 ? "#b700ff" : "#5a007e"}
                        color={formIsValid && statusApi === -1 ? "white" : "gray.500"}
                        onClick={formIsValid && statusApi === -1 ? onSubmit : onSubmitNotValid}
                        isLoading={statusApi === 0 || statusApi === 1}
                        boxShadow={formIsValid && statusApi === -1 ? "1px 7px 20px rgba(243, 0, 231, 0.5);" : ""}
                        _hover={hover}
                    >
                        SUBMIT
                    </Button>
                </VStack>

                <Center
                    flexDirection="column"
                    bg="black"
                    color="white"
                    p={10}
                    textAlign="center"
                    flex={1}
                >

                    <h1 className={`${neonderthaw.className} ${styles.neon} text-white text-4xl mx-4 lg:text-7xl  flex justify-center   items-center`} >
                        Lady<span className={styles.blink}>Storm</span>
                    </h1>
                    <Text mt={10}>
                        {t('cardText')}
                    </Text>
                    <Flex className="justify-center" mt={16}>
                        <div className="flex gap-5 w-full min-w-full">
                            <IconInsta /><IconFb /><IconMail />
                        </div>
                    </Flex>
                </Center>
            </Flex>
        </Box >
    )
}



//validation helpers
function validate(name, value) {
    if (name === "email")
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    if (name === "message")
        return value.length < 50
    return value === ""
}
function validateSubmit(name, value) {
    if (value === undefined)
        return false
    if (name === "email")
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    if (name === "message")
        return value.length >= 50
    return value !== ""
}
function validateForm(inputs) {

    const isvalid = ['name', 'email', 'subject', 'message'].reduce((acum, name) => acum && validateSubmit(name, inputs[name]), true)
    return isvalid
}