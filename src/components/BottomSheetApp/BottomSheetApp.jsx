import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const elevation = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 24,
};

const BottomSheetApp = () => {
  const sheetRef = useRef(null);

  const snapPoints = useMemo(() => ["20%", "75%"]);

  const onOpenSheet = useCallback(() => {
    sheetRef.current?.snapToIndex(1);
  }, []);

  const onCloseSheet = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return (
    <View style={styles.container}>
      <Text>BottomSheet App</Text>
      <Button title="Open Sheet" onPress={onOpenSheet} />
      <BottomSheet
        ref={sheetRef}
        onClose={onCloseSheet}
        snapPoints={snapPoints}
        style={{ ...elevation }}
      >
        <BottomSheetView style={{ padding: 10 }}>
          <Text>Hello</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
  backdrop: {
    backgroundColor: "grey",
    ...StyleSheet.absoluteFillObject,
  },
});
