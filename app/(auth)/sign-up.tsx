import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};
  return (
    <ScrollView className="flex1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h=[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            placeholderTextColor="#A9A9A9" // Corrected placeholderTextColor
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            placeholderTextColor="#A9A9A9" // Corrected placeholderTextColor
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            placeholderTextColor="#A9A9A9" // Corrected placeholderTextColor
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
            secureTextEntry={true}
          />
          {/* OAuth */}

          <Link
            href="/sign-in"
            className="text-lg text-center text-geneatl-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
