import { useSignIn } from "@clerk/clerk-expo";
import {
  VStack,
  Box,
  KeyboardAvoidingView,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  FormControlHelper,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelperText,
  AlertCircleIcon,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  Alert,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
const Login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <Center h="100%" zIndex={999}>
        <Box
          width={"$full"}
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <VStack $base-width={"$4/5"} $sm-width={"$3/4"} $md-width={"$1/2"}>
            <Spinner visible={loading} />
            <Box h="auto" w="$full">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText>Email</FormControlLabelText>
                </FormControlLabel>
                <Input height={"$16"}>
                  <InputField
                    type="text"
                    placeholder="correo electronico"
                    value={emailAddress}
                    onChangeText={setEmailAddress}
                  />
                </Input>
                <FormControlHelper>
                  <FormControlHelperText></FormControlHelperText>
                </FormControlHelper>
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    At least 6 characters are required.
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </Box>
            <Box height={"$5"} />
            <Box h="auto" w="$full">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText>Password</FormControlLabelText>
                </FormControlLabel>
                <Input height={"$16"}>
                  <InputField
                    type="password"
                    placeholder="****************"
                    value={password}
                    onChangeText={setPassword}
                  />
                </Input>
                <FormControlHelper>
                  <FormControlHelperText></FormControlHelperText>
                </FormControlHelper>
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    At least 6 characters are required.
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </Box>
            <Box height={"$5"} />
            <Button size={"xl"} onPress={onSignInPress}>
              <ButtonText>Iniciar Sesion</ButtonText>
            </Button>
            <Box height={"$5"} />
            <Link href="/reset" asChild>
              <Pressable style={styles.button}>
                <Text>Olvidaste contrasena?</Text>
              </Pressable>
            </Link>
          </VStack>
        </Box>
      </Center>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});
export default Login;
