import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

const API_KEY = "f700bc44a62c44abb2fc2cb6baa1db22";
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

interface NewsItem {
  title: String;
  descripton: String;
  publishedAt: string;
  url: string;
}
const NewsApp = (): React.JSX.Element => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((news) => {
        setNews(news.articles);
       

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  const _renderItem = ({ item }: { item: NewsItem }) => (
    <View style={styles.card}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.date}>
        {new Date(item.publishedAt).toLocaleDateString()}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {loading ? ( // ถ้ายังโหลดอยู่จะแสดง ActivityIndicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        // ถ้าข้อมูลโหลดแล้วจะแสดง  FlatList
        <FlatList
          data={news}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#aed",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
