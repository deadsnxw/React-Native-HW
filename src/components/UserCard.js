import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UserCard = ({ user }) => {
    const [isFollowed, setIsFollowed] = useState(false);

    const handlePress = () => {
        setIsFollowed(!isFollowed);
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.role}>{user.role}</Text>
            </View>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: isFollowed ? "red" : "blue" }]}
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>{isFollowed ? "Unfollow" : "Follow"}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#fff",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        width: "90%"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
    role: {
        fontSize: 12,
        color: "#888",
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default UserCard;
